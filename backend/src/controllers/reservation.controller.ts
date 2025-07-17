import { Request, Response } from 'express';
import { createReservation, getReservationsByUser } from '../services/reservation.service';

export const reserveSeats = async (req: Request, res: Response) => {
  // @ts-ignore
  const userId = req.user.id;
  const { showId, seats } = req.body;
  if (!showId || !seats || !Array.isArray(seats)) {
    return res.status(400).json({ message: 'showId and seats[] are required' });
  }
  const reservation = await createReservation({ userId, showId, seats });
  res.status(201).json(reservation);
};

export const listUserReservations = async (req: Request, res: Response) => {
  // @ts-ignore
  const userId = req.user.id;
  const reservations = await getReservationsByUser(userId);
  res.json(reservations);
}; 