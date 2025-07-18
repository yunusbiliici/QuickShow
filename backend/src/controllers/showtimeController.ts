import { Request, Response, NextFunction } from 'express';
import { getShowtimesByMovieId, createShowtime } from '../services/showtimeService';

export const listShowtimes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { movieId } = req.params;
    const showtimes = await getShowtimesByMovieId(movieId);
    res.json(showtimes);
  } catch (error) {
    next(error);
  }
};

export const addShowtime = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { movieId } = req.params;
    // TODO: Sadece admin rolündeki kullanıcıların seans eklemesi için kontrol eklenebilir.
    const newShowtime = await createShowtime(movieId, req.body);
    res.status(201).json(newShowtime);
  } catch (error) {
    next(error);
  }
};