import { Router } from 'express';
import { listMovies, getMovie, createMovie } from '../controllers/movieController';
import { authenticate, adminOnly } from '../middlewares/authMiddleware';
import showtimeRoutes from './showtimeRoutes';

const router = Router();

// `/api/movies/:movieId/showtimes` ile başlayan tüm istekleri `showtimeRoutes`'a yönlendir.
// Bu, iç içe (nested) route yapısıdır ve daha temiz bir kod sağlar.
router.use('/:movieId/showtimes', showtimeRoutes);

router.get('/', listMovies);
router.post('/', authenticate, adminOnly, createMovie);

// Tutarlılık için :id yerine :movieId kullanalım.
router.get('/:movieId', getMovie);

export default router;