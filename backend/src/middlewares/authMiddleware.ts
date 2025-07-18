import { Request, Response, NextFunction } from 'express';
import { verifyJwt } from '../utils/jwt';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];
  const payload = verifyJwt(token);
  if (!payload) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
  // @ts-ignore
  req.user = payload;
  next();
}; 