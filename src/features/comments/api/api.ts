import axios from 'axios';

export const $apiComment = axios.create({
  baseURL: `${process.env.DATABASE_URL}/api`,
});

$apiComment.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
