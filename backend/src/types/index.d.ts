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