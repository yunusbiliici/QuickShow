import mongoose, { Document, Schema } from 'mongoose';

export interface IShowtime extends Document {
  movieId: mongoose.Types.ObjectId;
  dateTime: Date;
  hall: string;
  availableSeats: string[];
  bookedSeats: string[];
  price: number;
}

const ShowtimeSchema = new Schema<IShowtime>({
  movieId: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
  dateTime: { type: Date, required: true },
  hall: { type: String, required: true },
  availableSeats: { type: [String], required: true },
  bookedSeats: { type: [String], default: [] },
  price: { type: Number, required: true },
}, { timestamps: true });

export default mongoose.model<IShowtime>('Showtime', ShowtimeSchema); 