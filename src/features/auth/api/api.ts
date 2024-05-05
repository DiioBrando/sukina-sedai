import axios from 'axios';
import { IAuthResponse } from '@/entities/models/IAuth';

const $api = axios.create({
  withCredentials: true,
  baseURL: process.env.DATABASE_URL + '/api',
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

$api.interceptors.request.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<IAuthResponse>(
          `${process.env.DATABASE_URL}/api/refresh`,
          { withCredentials: true },
        );
        localStorage.setItem('token', response.data.accessToken);
        return $api.request(originalRequest);
      } catch (e) {
        console.log('No auth');
      }
    }
    throw error;
  },
);

export default $api;
