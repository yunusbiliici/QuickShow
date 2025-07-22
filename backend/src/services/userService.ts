import User, { IUser } from '../models/User';
import bcrypt from 'bcryptjs';

// The user model uses 'email' for identification, not 'username'.
export const findUserByEmail = async (email: string): Promise<IUser | null> => {
  return User.findOne({ email }).exec();
};

// The user model uses 'email' for identification, not 'username'.
export const findUserByEmailWithPassword = async (email: string): Promise<IUser | null> => {
  return User.findOne({ email }).select('+password').exec();
};

// Bu fonksiyon, yeni kullanıcı oluşturmak için genel bir yardımcıdır.
export const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
  return User.create(userData);
};

// Bu fonksiyon, ID ile kullanıcı bulmak için genel bir yardımcıdır.
export const findUserById = async (id: string): Promise<IUser | null> => {
  return User.findById(id).exec();
};

// Kullanıcı kayıt fonksiyonu
export const registerUser = async (email: string, password: string): Promise<IUser> => {
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    // Daha spesifik bir hata fırlatmak, controller katmanında daha iyi hata yönetimi sağlar.
    const error: any = new Error('Bu e-posta adresi zaten kayıtlı.');
    error.statusCode = 409; // 409 Conflict
    throw error;
  }

  // Parolayı hashle:
  const hashedPassword = await bcrypt.hash(password, 10);

  // 'new User()' ve '.save()' yerine 'User.create' kullanmak daha modern ve tek adımdır.
  // The model uses 'email', so we create the user with an email.
  return User.create({ email, password: hashedPassword });
};

export const loginUser = async (email: string, password: string): Promise<IUser | null> => {
  const user = await findUserByEmailWithPassword(email);
  if (!user || !user.password) {
    return null;
  }

  const isMatch = await bcrypt.compare(password, user.password); // artık TS hatası vermez
  return isMatch ? user : null;
};
