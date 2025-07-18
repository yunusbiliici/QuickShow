import User, { IUser } from '../models/User';

export const findUserByEmail = async (email: string) => {
  return User.findOne({ email });
};

export const createUser = async (userData: Partial<IUser>) => {
  const user = new User(userData);
  return user.save();
};

export const findUserById = async (id: string) => {
  return User.findById(id);
}; 