import { IUser } from '@/entities/models/IAuth';

export interface IStore {
  user: IUser;
  isAuth: boolean;
  login: (email: string, password: string) => Promise<void>;
  registration: (
    login: string,
    email: string,
    password: string,
  ) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}
