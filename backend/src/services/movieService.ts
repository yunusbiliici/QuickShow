import Movie, { IMovie } from '../models/Movie';

export const getAllMovies = async (): Promise<IMovie[]> => {
  return Movie.find();
};

export const getMovieById = async (id: string): Promise<IMovie | null> => {
  return Movie.findById(id);
};

export const createMovie = async (movieData: Partial<IMovie>): Promise<IMovie> => {
  return Movie.create(movieData);
}; 