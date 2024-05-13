import axios from 'axios';

export const $apiInventory = axios.create({
  baseURL: `${process.env.DATABASE_URL}/api`,
});

$apiInventory.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
