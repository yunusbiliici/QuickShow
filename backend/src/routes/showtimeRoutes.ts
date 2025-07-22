import { Router } from 'express';
import { listShowtimes, addShowtime } from '../controllers/showtimeController';
import { authenticate, adminOnly } from '../middlewares/authMiddleware';

// Bu router, başka bir router'ın içine yerleştirileceği için `mergeParams: true`
// seçeneği ile oluşturulmalıdır. Bu sayede üst router'daki parametrelere (örn: movieId) erişebilir.
const router = Router({ mergeParams: true });

router.route('/')
    .get(listShowtimes) // GET /api/movies/:movieId/showtimes
    .post(authenticate, adminOnly, addShowtime); // POST /api/movies/:movieId/showtimes

export default router;