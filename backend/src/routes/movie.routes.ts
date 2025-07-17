import { Router } from 'express';
import { listMovies, getMovie } from '../controllers/movie.controller';
import { listShowtimes } from '../controllers/showtime.controller';

const router = Router();

router.get('/', listMovies);
router.get('/:id', getMovie);
router.get('/:movieId/showtimes', listShowtimes);

export default router;