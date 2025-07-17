import Showtime, { IShowtime } from '../models/Showtime';

export const getShowtimesByMovie = async (movieId: string) => {
  return Showtime.find({ movieId });
};

export const getShowtimeById = async (id: string) => {
  return Showtime.findById(id);
}; 