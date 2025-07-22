import { Request, Response, NextFunction } from 'express';
import { verifyJwt } from '../utils/jwt';
import { JsonWebTokenError } from 'jsonwebtoken';
import { findUserById } from '../services/userService';
import { IUser } from '../models/User';

// Express'in Request arayüzünü genişleterek 'user' özelliğini ekliyoruz.
// Bu sayede TypeScript, req.user'ı tanıyacak ve otomatik tamamlama sağlayacak.
declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
  let token;

  // 1. Token'ı Authorization header'ından al
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // 'Bearer <token>' formatından token'ı ayır
      token = req.headers.authorization.split(' ')[1];

      // 2. Token'ı doğrula ve içindeki payload'u al
      // verifyJwt fonksiyonunun dönüş tipi `any` veya `object` olabilir.
      const decoded = verifyJwt(token);
      // TypeScript'in `decoded.id` özelliğini güvenle kullanabilmesi için `decoded` objesinin yapısını kontrol etmeliyiz.
      if (typeof decoded !== 'object' || !decoded || !('id' in decoded) || typeof decoded.id !== 'string') {
        return res.status(401).json({ message: 'Yetkiniz yok, token geçersiz.' });
      }

      // 3. Token'dan gelen ID ile kullanıcıyı veritabanından bul (parola olmadan)
      const user = await findUserById(decoded.id);

      if (!user) {
        return res.status(401).json({ message: 'Yetkiniz yok, kullanıcı bulunamadı.' });
      }

      // 4. Kullanıcı bilgisini request objesine ekle ve sonraki adıma geç
      req.user = user;
      next();
    } catch (error) {
      // Hata tipine göre daha spesifik mesajlar döndürelim
      if (error instanceof JsonWebTokenError) {
        if (error.name === 'TokenExpiredError') {
          return res.status(401).json({ message: 'Oturum süresi doldu, lütfen tekrar giriş yapın.' });
        }
        return res.status(401).json({ message: 'Yetkiniz yok, token geçersiz.' });
      }
      return res.status(500).json({ message: 'Kimlik doğrulaması sırasında bir sunucu hatası oluştu.' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Yetkiniz yok, token bulunamadı.' });
  }
};

export const adminOnly = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Yetkiniz yok, bu işlem için admin olmalısınız.' });
  }
};
