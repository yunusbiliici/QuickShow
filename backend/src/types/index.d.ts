import { IUser } from '../models/User';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export interface Movie {
  id: string;
  title: string;
  description: string;
  duration: string;
  trailerUrl: string;
  coverImage: string;
  genres: string[];
}

export interface Showtime {
  id: string;
  movieId: string;
  dateTime: Date; // date ve time birleştirildi ve Date tipi kullanıldı
  availableSeats: number;
  price: number;
}

export interface Reservation {
  userId: string;
  showtimeId: string; // Daha anlaşılır olması için 'showtimeId' olarak değiştirildi
  seats: string[];
} 

// Express'in Request objesini genişletmek için bu bloğu ekliyoruz.
// Bu sayede projenin herhangi bir yerinde `req.user` yazdığımızda TypeScript hata vermeyecektir.
declare global {
  namespace Express {
    export interface Request {
      // Request objesine 'user' özelliğini ekliyoruz.
      // Bu özellik opsiyoneldir (?) çünkü her request'te bu bilgi olmayabilir (sadece korunan route'larda olur).
      user?: IUser;
    }
  }
}