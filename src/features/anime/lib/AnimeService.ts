import { AxiosResponse } from 'axios';
import { AnimeList, Titles } from '@/entities/models/IAnimeListType';
import { $apiAniLibria } from '@/features/anime/api/api';

export default class AnimeService {
  static async getAnimeByLastUpdate(
    currentPage: number,
    itemsPerPage: number,
  ): Promise<AxiosResponse<AnimeList>> {
    return $apiAniLibria.get('/title/updates', {
      params: {
        page: currentPage,
        items_per_page: itemsPerPage,
      },
    });
  }
  static async getRandomAnime(): Promise<AxiosResponse<Titles>> {
    return $apiAniLibria.get('/title/random', {
      params: {
        playlist_type: 'array',
      },
    });
  }
  static async getAnimeById(animeId: number): Promise<AxiosResponse<Titles>> {
    return $apiAniLibria.get('/title', {
      params: {
        id: animeId,
        playlist_type: 'array',
      },
    });
  }
  static async getAnimeListByArrayId(
    listId: string,
  ): Promise<AxiosResponse<Titles[]>> {
    return $apiAniLibria.get(`/title/list?id_list=${listId}`);
  }
}
