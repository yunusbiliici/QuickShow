import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database';
import userRoutes from './routes/userRoutes';
import movieRoutes from './routes/movieRoutes';
import showtimeRoutes from './routes/showtimeRoutes';
import reservationRoutes from './routes/reservationRoutes';

dotenv.config();

const app = express();

app.use(express.json());

// --- API Rotaları ---
app.use('/api/users', userRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/showtimes', showtimeRoutes);
app.use('/api/reservations', reservationRoutes);

const PORT = process.env.PORT || 8080;

