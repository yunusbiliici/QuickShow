import { Request, Response } from 'express';
import { getShowtimesByMovie } from '../services/showtime.service';

export const listShowtimes = async (req: Request, res: Response) => {
  const { movieId } = req.params;
  const showtimes = await getShowtimesByMovie(movieId);
  res.json(showtimes);
}; 