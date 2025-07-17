import mongoose, { Document, Schema } from 'mongoose';

export interface IReservation extends Document {
  userId: mongoose.Types.ObjectId;
  showId: mongoose.Types.ObjectId;
  seats: string[];
}

const ReservationSchema = new Schema<IReservation>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  showId: { type: Schema.Types.ObjectId, ref: 'Showtime', required: true },
  seats: [{ type: String, required: true }],
}, { timestamps: true });

export default mongoose.model<IReservation>('Reservation', ReservationSchema); 