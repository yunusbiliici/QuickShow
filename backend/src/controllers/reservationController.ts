import { Response, NextFunction, Request } from "express";
import * as reservationService from "../services/reservationService";

// Bu fonksiyonun adı projenizdeki route tanımına göre değişebilir.
export const createReservationHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {

    const { showtimeId, seats } = req.body;

    const userId = req.user!._id;

    const reservationData = { showtimeId, seats, userId };
    const reservation = await reservationService.createReservation(reservationData);

    res.status(201).json(reservation);
  } catch (error) {
    next(error);
  }
};

// Güvenlik nedeniyle bu endpoint'in adı `/me` (benim rezervasyonlarım) gibi
// bir route'a işaret etmelidir.
export const getMyReservationsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.user!._id;

    const reservations = await reservationService.getReservationsByUser(userId);

    // DÜZELTME: Başarılı durumda rezervasyonları JSON olarak gönderiyoruz.
    res.status(200).json(reservations);
  } catch (error) {
    // Hata durumunda hatayı bir sonraki middleware'e iletiyoruz.
    next(error);
  }
};
