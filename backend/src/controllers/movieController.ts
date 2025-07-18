import { Request, Response, NextFunction } from 'express';
import { getAllMovies, getMovieById, createMovie as createMovieService } from '../services/movieService';

export const listMovies = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const movies = await getAllMovies();
    res.json(movies);
  } catch (error) {
    next(error);
  }
};

export const getMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const movie = await getMovieById(id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    res.json(movie);
  } catch (error) {
    next(error);
  }
}; 

export const createMovie = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // TODO: İleride buraya sadece 'admin' rolündeki kullanıcıların
    // film ekleyebilmesi için bir kontrol ekleyebiliriz.
    const newMovie = await createMovieService(req.body);
    res.status(201).json(newMovie); // 201 Created status kodu ile yanıt veriyoruz
  } catch (error) {
    next(error);
  }
};