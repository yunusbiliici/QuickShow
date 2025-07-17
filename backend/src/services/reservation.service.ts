import Reservation, { IReservation } from '../models/Reservation';

export const createReservation = async (reservationData: Partial<IReservation>) => {
  const reservation = new Reservation(reservationData);
  return reservation.save();
};

export const getReservationsByUser = async (userId: string) => {
  return Reservation.find({ userId });
}; 