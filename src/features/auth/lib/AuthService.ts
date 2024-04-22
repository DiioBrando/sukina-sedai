import { AxiosResponse } from 'axios';
import { IAuthResponse } from '@/entities/models/IAuth';
import $api from '@/features/auth/api/api';

export default class AuthService {
  static async login(
    email: string,
    password: string,
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>('/login', { email, password });
  }

  static async registration(
    login: string,
    email: string,
    password: string,
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>('/registration', {
      login,
      email,
      password,
    });
  }

  static async logout(): Promise<void> {
    return $api.post('/logout');
  }
}
