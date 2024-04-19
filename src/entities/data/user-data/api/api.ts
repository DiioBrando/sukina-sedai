import axios from 'axios';

export const $postUser = axios.create({
  baseURL: process.env.DATABASE_URL + '/api/users',
  timeout: 1000,
});
