import mongoose from 'mongoose';
import Reservation, { IReservation } from '../models/Reservation';
import Showtime from '../models/Showtime';

// Dışarıdan gelecek verinin tipini tanımlıyoruz
interface ReservationData {
  showtimeId: string;
  seats: string[];
  userId: string;
}

export const createReservation = async (data: ReservationData): Promise<IReservation> => {
  const { showtimeId, seats, userId } = data;

  // Atomik işlemler için bir oturum (session) başlatıyoruz.
  // try...catch...finally bloğu, hata durumunda bile oturumun
  // düzgün bir şekilde kapatılmasını garanti eder.
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // 1. Seansı bul ve işlem boyunca kilitle (for update).
    // .session(session) bu sorguyu mevcut transaction'a dahil eder.
    const showtime = await Showtime.findById(showtimeId).session(session);
    if (!showtime) {
      // Not: Daha iyi bir hata yönetimi için burada 404 durum koduna
      // işaret eden özel bir hata sınıfı (örn: NotFoundError) fırlatılabilir.
      throw new Error('Belirtilen seans bulunamadı.');
    }

    // 2. Yeterli koltuk var mı diye kontrol et
    if (showtime.availableSeats < seats.length) {
      // Not: Bu durum 400 Bad Request'e işaret eder.
      throw new Error('Yeterli boş koltuk bulunmuyor.');
    }

    // 3. İstenen koltuklardan herhangi biri daha önce rezerve edilmiş mi?
    // GÜVENLİK GÜNCELLEMESİ: `showtime.bookedSeats` alanı 'undefined' ise programın çökmesini engelliyoruz.
    // `(showtime.bookedSeats || [])` ifadesi, eğer `bookedSeats` yoksa boş bir dizi kullanılmasını sağlar.
    const alreadyBooked = seats.some(seat => (showtime.bookedSeats || []).includes(seat));
    if (alreadyBooked) {
      // Not: Bu durum 409 Conflict'e işaret eder.
      throw new Error('Seçtiğiniz koltuklardan biri veya birkaçı daha önce rezerve edilmiş.');
    }

    // 4. Toplam fiyatı hesapla
    const totalPrice = seats.length * showtime.price;

    // 5. Rezervasyonu oluştur. Reservation.create metodu, işlemi session'a dahil eder.
    // Dizi içinde tek bir obje versek bile, create metodu bir dizi döner.
    const [reservation] = await Reservation.create(
      [
        {
          userId,
          showtimeId,
          seats,
          totalPrice,
        },
      ],
      { session }
    );

    // 6. Seans bilgilerini güncelle
    showtime.availableSeats -= seats.length;
    showtime.bookedSeats.push(...seats);
    await showtime.save({ session });

    // 7. Her şey başarılıysa, işlemi onayla (commit)
    await session.commitTransaction();

    return reservation;
  } catch (error) {
    // Herhangi bir hata olursa, tüm işlemleri geri al (abort)
    // Sadece transaction başlatıldıysa abort et.
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    throw error; // Hatayı, global error handler'ın yakalaması için tekrar fırlat
  } finally {
    // İşlem başarılı da olsa, başarısız da olsa oturumu sonlandır.
    session.endSession();
  }
};

export const getReservationsByUser = async (userId: string): Promise<IReservation[]> => {
  // Kullanıcının rezervasyonlarını bulurken, ilgili seans ve film bilgilerini de
  // 'populate' ile getiriyoruz. Bu, frontend'de bilgileri göstermeyi kolaylaştırır.
  return Reservation.find({ userId }).populate({
    path: 'showtimeId',
    populate: {
      path: 'movieId',
      model: 'Movie', // Model ismini belirtmek populate için iyi bir pratiktir.
    },
  });
};
