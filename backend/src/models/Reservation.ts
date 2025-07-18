// c:\Users\yunus\Desktop\Projects\backend\src\models\Reservation.ts

import mongoose, { Document, Schema } from 'mongoose';

export interface IReservation extends Document {
  userId: mongoose.Types.ObjectId;
  showtimeId: mongoose.Types.ObjectId;
  seats: string[]; // Örn: ["A5", "A6"]
  totalPrice: number;
}

const ReservationSchema = new Schema<IReservation>(
  {
    // Rezervasyonu yapan kullanıcıya referans
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    // Rezervasyonun yapıldığı seansa referans
    showtimeId: {
      type: Schema.Types.ObjectId,
      ref: 'Showtime',
      required: true,
    },
    // Seçilen koltuk numaraları
    seats: {
      type: [String],
      required: true,
    },
    // Toplam ödenen ücret
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } // createdAt ve updatedAt alanlarını otomatik ekler
);

export default mongoose.model<IReservation>('Reservation', ReservationSchema);
