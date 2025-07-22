import { Request, Response, NextFunction } from 'express';
import { findUserByEmail, findUserByEmailWithPassword, findUserById, createUser } from '../services/userService';
import { signJwt } from '../utils/jwt';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Lütfen tüm alanları doldurun.' });
    }

    const userExists = await findUserByEmail(email);

    if (userExists) {
      return res.status(400).json({ message: 'Bu e-posta adresi zaten kullanılıyor.' });
    }

    const user = await createUser({ name, email, password });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: signJwt({ id: user._id, role: user.role }),
    });
  } catch (error) {
    next(error);
  }
};


export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: 'Lütfen e-posta ve parola girin.' });
    }

    const user = await findUserByEmailWithPassword(email);

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Geçersiz e-posta veya parola.' });
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: signJwt({ id: user._id, role: user.role }),
    });
  } catch (error) {
    next(error);
  }
};

export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  // Bu fonksiyon 'authenticate' middleware'i tarafından korunduğu için,
  // req.user objesinin var olduğunu ve kullanıcı bilgilerini içerdiğini varsayabiliriz.
  try {
    if (!req.user) {
      // Bu durum normalde 'authenticate' middleware'i tarafından yakalanır.
      // Buraya ulaşılması, beklenmedik bir sunucu içi soruna işaret eder.
      return res.status(500).json({ message: 'Kullanıcı bilgisi alınamadı.' });
    }
    res.json({
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role,
    });
  } catch (error) {
    next(error);
  }
};