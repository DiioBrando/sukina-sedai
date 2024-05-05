import { IAuthResponse, IUser } from '@/entities/models/IAuth';
import AuthService from '@/features/auth/lib/AuthService';
import axios from 'axios';
import { create } from 'zustand';

export default class UserStore {
  user = {} as IUser;
  isAuth = false;

  setAuth(bool: boolean) {
    this.isAuth = bool;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e);
    }
  }

  async registration(login: string, email: string, password: string) {
    try {
      const response = await AuthService.registration(login, email, password);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({} as IUser);
    } catch (e) {
      console.log(e);
    }
  }

  async checkAuth() {
    try {
      const response = await axios.get<IAuthResponse>(
        `${process.env.DATABASE_URL}/api/refresh`,
        { withCredentials: true },
      );
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (e) {
      console.log(e);
    }
  }
}
