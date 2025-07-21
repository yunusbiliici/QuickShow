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

  // Atomik işlem için bir oturum (session) başlatıyoruz
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    // 1. Seansı bul ve işlem boyunca kilitle
    const showtime = await Showtime.findById(showtimeId).session(session);
    if (!showtime) {
      throw new Error('Showtime not found');
    }

    // 2. Yeterli koltuk var mı diye kontrol et
    if (showtime.availableSeats < seats.length) {
      throw new Error('Not enough available seats');
    }

    // 3. İstenen koltuklardan herhangi biri daha önce rezerve edilmiş mi?
    const alreadyBooked = seats.some(seat => showtime.bookedSeats.includes(seat));
    if (alreadyBooked) {
      throw new Error('One or more seats are already booked');
    }

    // 4. Toplam fiyatı hesapla
    const totalPrice = seats.length * showtime.price;

    // 5. Rezervasyonu oluştur
    const reservation = new Reservation({
      userId,
      showtimeId,
      seats,
      totalPrice,
    });
    await reservation.save({ session });

    // 6. Seans bilgilerini güncelle
    showtime.availableSeats -= seats.length;
    showtime.bookedSeats.push(...seats);
    await showtime.save({ session });

    // 7. Her şey başarılıysa, işlemi onayla
    await session.commitTransaction();
    session.endSession();

    return reservation;
  } catch (error) {
    // Herhangi bir hata olursa, tüm işlemleri geri al
    await session.abortTransaction();
    session.endSession();
    throw error; // Hatayı kontrolcüye gönder
  }
};

export const getReservationsByUser = async (userId: string): Promise<IReservation[]> => {
  // Kullanıcının rezervasyonlarını bulurken, ilgili seans ve film bilgilerini de
  // 'populate' ile getiriyoruz. Bu, frontend'de bilgileri göstermeyi kolaylaştırır.
  return Reservation.find({ userId }).populate({
    path: 'showtimeId',
    populate: {
      path: 'movieId',
    },
  });
};
