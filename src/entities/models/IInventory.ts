import { Titles } from '@/entities/models/IAnimeListType';

export interface IInventory {
  _id: string;
  idUser: string;
  animeId: string;
  typeItem: string;
}

export interface IInventoryStore {
  anime: Titles[];
  isLoad: boolean;
}
