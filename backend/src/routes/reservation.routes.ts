import { Router } from 'express';
import { reserveSeats, listUserReservations } from '../controllers/reservation.controller';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.post('/', authenticate, reserveSeats);
router.get('/my', authenticate, listUserReservations);

export default router; 