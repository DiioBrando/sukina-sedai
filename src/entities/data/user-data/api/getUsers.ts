import axios from 'axios';
export const getUsers = axios.create({
  baseURL: 'https://6605885e2ca9478ea1809589.mockapi.io/',
});
