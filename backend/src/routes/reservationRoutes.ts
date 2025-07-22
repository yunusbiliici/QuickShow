import { Router } from 'express';
import { createReservationHandler, getMyReservationsHandler } from '../controllers/reservationController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', authenticate, createReservationHandler);
router.get('/my', authenticate, getMyReservationsHandler);

export default router;