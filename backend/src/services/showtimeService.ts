import Showtime, { IShowtime } from '../models/Showtime';
import Movie from '../models/Movie';
import { Error } from 'mongoose';

export const getShowtimesByMovieId = async (movieId: string) => {
  return Showtime.find({ movieId });
};

export const getShowtimeById = async (id: string) => {
  return Showtime.findById(id);
};

export const createShowtime = async (
  movieId: string,
  showtimeData: { dateTime: Date; availableSeats: number; price: number }
): Promise<IShowtime> => {
  // Önce böyle bir film var mı diye kontrol edelim
  const movie = await Movie.findById(movieId);
  if (!movie) {
    throw new Error.DocumentNotFoundError('Movie not found with id: ' + movieId);
  }

  const newShowtime = new Showtime({
    ...showtimeData,
    movieId: movie._id,
  });

  return newShowtime.save();
};