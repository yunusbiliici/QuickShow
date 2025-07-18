import Movie, { IMovie } from '../models/Movie';
import { Document } from 'mongoose';

export const getAllMovies = async (): Promise<IMovie[]> => {
  return Movie.find();
};

export const getMovieById = async (id: string): Promise<IMovie | null> => {
  return Movie.findById(id);
};

export const createMovie = async (movieData: Partial<IMovie>): Promise<IMovie> => {
  const movie = new Movie(movieData);
  return movie.save();
}; 