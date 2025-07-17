import mongoose, { Document, Schema } from 'mongoose';

export interface IShowtime extends Document {
  movieId: mongoose.Types.ObjectId;
  date: string;
  time: string;
  availableSeats: number;
  price: number;
}

const ShowtimeSchema = new Schema<IShowtime>({
  movieId: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  availableSeats: { type: Number, required: true },
  price: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model<IShowtime>('Showtime', ShowtimeSchema); 