import User, { IUser } from '../models/User';

export const findUserByEmail = async (email: string): Promise<IUser | null> => {
  return User.findOne({ email }).exec();
};

export const findUserByEmailWithPassword = async (email: string): Promise<IUser | null> => {
  // User modelinde 'select: false' olduğu için parolayı açıkça istiyoruz.
  return User.findOne({ email }).select('+password').exec();
};

export const createUser = async (userData: Partial<IUser>): Promise<IUser> => {
  // User.create() metodu, new User(userData).save() ile aynı işi yapar, daha modern bir kullanımdır.
  return User.create(userData);
};

export const findUserById = async (id: string): Promise<IUser | null> => {
  return User.findById(id).exec();
}; 