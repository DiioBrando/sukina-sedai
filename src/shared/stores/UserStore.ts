import { IAuthResponse, IUser } from '@/entities/models/IAuth';
import AuthService from '@/features/auth/lib/AuthService';
import { create } from 'zustand';
import axios from 'axios';
import { IStore } from '@/entities/models/IStore';
import { cookies, headers } from 'next/headers';
import { deleteCookie } from 'undici-types';

export const useUserStore = create<IStore>((set) => ({
  user: {} as IUser,
  isAuth: false,

  login: async (email: string, password: string) => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.accessToken);
      set({ isAuth: true, user: response.data.user });
    } catch (e) {
      console.log(e);
    }
  },
  registration: async (login: string, email: string, password: string) => {
    try {
      const response = await AuthService.registration(login, email, password);
      localStorage.setItem('token', response.data.accessToken);
      set({ isAuth: true, user: response.data.user });
    } catch (e) {
      console.log(e);
    }
  },

  logout: async () => {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      set({ isAuth: false, user: {} as IUser });
    } catch (e) {
      console.log(e);
    }
  },
  checkAuth: async () => {
    try {
      const response = await axios.get<IAuthResponse>(
        `${process.env.DATABASE_URL}/api/refresh`,
        { withCredentials: true },
      );
      localStorage.setItem('token', response.data.accessToken);
      set({ isAuth: true, user: response.data.user });
    } catch (e) {
      console.log(e);
    }
  },
}));
