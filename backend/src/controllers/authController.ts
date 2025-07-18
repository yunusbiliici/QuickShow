import { Request, Response } from 'express';
import { findUserByEmail, findUserById, createUser } from '../services/userService';
import { signJwt } from '../utils/jwt';
import bcrypt from 'bcryptjs';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
  const token = signJwt({ id: user._id, email: user.email, role: user.role });
  res.json({ token });
};

export const getProfile = async (req: Request, res: Response) => {
  // @ts-ignore
  const userId = req.user.id;
  const user = await findUserById(userId);
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json({
    id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  });
}; 