import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/userService';
import jwt from 'jsonwebtoken';

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const user = await userService.registerUser(email, password);

        // Güvenlik için parolayı geri döndürmüyoruz
        res.status(201).json({ _id: user._id, email: user.email });
    } catch (error: any) {
        // Servis katmanından gelen 409 (Conflict) hatasını yakalayıp
        // kullanıcıya daha anlamlı bir yanıt dönüyoruz.
        if (error.statusCode === 409) {
            return res.status(409).json({ message: error.message });
        }
        // Mongoose'un fırlattığı doğrulama hatalarını yakalıyoruz.
        // (örn: email formatı yanlış, parola çok kısa vb.)
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map((err: any) => err.message);
            return res.status(400).json({ message: messages.join(', ') });
        }
        next(error); // Diğer beklenmedik hataları genel hata yakalayıcıya iletiyoruz.
    }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body; // username yerine email
        const user = await userService.loginUser(email, password);

        if (!user) {
            return res.status(401).json({ message: 'Geçersiz e-posta veya parola' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
            expiresIn: '1d',
        });

        res.json({ token });
    } catch (error) {
        next(error);
    }
};
