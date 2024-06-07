import { $apiInventory } from '@/features/inventory/api/api';
import { AxiosResponse } from 'axios';
import { IInventory } from '@/entities/models/IInventory';
import { Titles } from '@/entities/models/IAnimeListType';
import AnimeService from '@/features/anime/lib/AnimeService';

export default class InventoryService {
  static async addAnime(animeId: number, typeItem: string) {
    return $apiInventory.post('/add-anime-inventory', {
      animeId,
      typeItem,
    });
  }
  static async deleteAnime(animeId: number) {
    return $apiInventory.delete(`/delete-anime-inventory/${animeId}`);
  }
  static async updateAnime(animeId: string, typeItem: string) {
    return $apiInventory.patch(`/update-anime-inventory/${animeId}`, {
      typeItem,
    });
  }
  static async deleteMany(animeId: Array<string>) {
    return $apiInventory.delete('/delete-anime-inventory-array', {
      data: { animeId },
    });
  }

  static async getAllInventory(userId: string, categoryAnime: string) {
    const listId = await $apiInventory.get(
      `/getAll-anime-inventory/${userId}/${categoryAnime}`,
    );
    return await AnimeService.getAnimeListByArrayId(listId.data);
  }
}
