export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
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
  date: string;
  time: string;
  availableSeats: number;
  price: number;
}

export interface Reservation {
  userId: string;
  showId: string;
  seats: string[];
} 