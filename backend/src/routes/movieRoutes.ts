import { Router } from 'express';
import { listMovies, getMovie, createMovie } from '../controllers/movieController';
import { authenticate, adminOnly } from '../middlewares/authMiddleware';
import { listShowtimes, addShowtime } from '../controllers/showtimeController';

const router = Router();

router.get('/', listMovies);
router.post('/', authenticate, adminOnly, createMovie);
router.get('/:id', getMovie);
router.post('/:movieId/showtimes', authenticate, adminOnly, addShowtime); // Sadece adminler seans ekleyebilir
router.get('/:movieId/showtimes', listShowtimes);

export default router;