import express, { Request, Response } from 'express';
import cors from 'cors'; 
import dotenv from 'dotenv';
import morgan from 'morgan';
import { errorHandler } from './middlewares/errorMiddleware';
import authRoutes from './routes/authRoutes';
import movieRoutes from './routes/movieRoutes';
import reservationRoutes from './routes/reservationRoutes';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Test Route
app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

// API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/movies', movieRoutes);
app.use('/api/v1/reservations', reservationRoutes);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Error Handler
app.use(errorHandler);

export default app; 