import { Router } from 'express';
import { listMovies, getMovie, createMovie } from '../controllers/movieController';
import { listShowtimes, addShowtime } from '../controllers/showtimeController';

const router = Router();

router.get('/', listMovies);
router.post('/', createMovie);
router.get('/:id', getMovie);
router.post('/:movieId/showtimes', addShowtime); // Yeni gösterim zamanı ekleme rotası
router.get('/:movieId/showtimes', listShowtimes);

export default router;