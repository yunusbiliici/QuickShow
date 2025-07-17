import Movie, { IMovie } from '../models/Movie';

export const getAllMovies = async () => {
  return Movie.find();
};

export const getMovieById = async (id: string) => {
  return Movie.findById(id);
};

export const createMovie = async (movieData: Partial<IMovie>) => {
  const movie = new Movie(movieData);
  return movie.save();
}; 