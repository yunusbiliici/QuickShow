import { Request, Response } from 'express';
import { getAllMovies, getMovieById } from '../services/movie.service';

export const listMovies = async (req: Request, res: Response) => {
  const movies = await getAllMovies();
  res.json(movies);
};

export const getMovie = async (req: Request, res: Response) => {
  const { id } = req.params;
  const movie = await getMovieById(id);
  if (!movie) return res.status(404).json({ message: 'Movie not found' });
  res.json(movie);
}; 