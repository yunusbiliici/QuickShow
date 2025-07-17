import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { errorHandler } from './middlewares/error.middleware';
import authRoutes from './routes/auth.routes';
import movieRoutes from './routes/movie.routes';
import reservationRoutes from './routes/reservation.routes';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/movies', movieRoutes);
app.use('/api/v1/reservation', reservationRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Error Handler
app.use(errorHandler);

export default app; 