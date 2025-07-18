import { Router } from 'express';
import { reserveSeats, listUserReservations } from '../controllers/reservationController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', authenticate, reserveSeats);
router.get('/my', authenticate, listUserReservations);

export default router; 