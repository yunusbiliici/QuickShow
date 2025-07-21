import mongoose, { Document, Schema } from 'mongoose';

export interface IMovie extends Document {
  title: string;
  description: string;
  duration: number; // Film süresi dakika cinsinden
  trailerUrl: string;
  coverImage: string;
  genres: string[];
}

const MovieSchema = new Schema<IMovie>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  trailerUrl: { type: String, required: true },
  coverImage: { type: String, required: true },
  genres: [{ type: String, required: true }],
}, { timestamps: true });

export default mongoose.model<IMovie>('Movie', MovieSchema); 