import { Request, Response, NextFunction } from 'express';
import { createReservation, getReservationsByUser } from '../services/reservationService';

export const reserveSeats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Güvenlik için kullanıcı ID'sini req.body'den değil, token'dan gelen req.user'dan alıyoruz.
    const userId = req.user?._id;
    const { showtimeId, seats } = req.body;

    if (!userId) {
      // Bu durum normalde authenticate middleware'i tarafından yakalanır, ama ek bir güvence.
      return res.status(401).json({ message: 'Not authorized' });
    }

    if (!showtimeId || !seats || !Array.isArray(seats)) {
      return res.status(400).json({ message: 'showtimeId and seats[] are required' });
    }

    const reservation = await createReservation({ userId: userId.toString(), showtimeId, seats });
    res.status(201).json(reservation);
  } catch (error) {
    next(error);
  }
};

export const listUserReservations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // req.user.id yerine req.user._id kullanıyoruz ve req.user'ın varlığını kontrol ediyoruz.
    const userId = req.user?._id;
    if (!userId) return res.status(401).json({ message: 'Not authorized' });
    const reservations = await getReservationsByUser(userId);
    res.json(reservations);
  } catch (error) {
    next(error);
  }
}; 