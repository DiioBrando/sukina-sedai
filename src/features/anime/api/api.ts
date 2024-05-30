import axios from 'axios';

export const $apiAniLibria = axios.create({
  baseURL: 'https://api.anilibria.tv/v3',
});
