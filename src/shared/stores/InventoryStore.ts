import { IInventoryStore } from '@/entities/models/IInventory';
import { createWithEqualityFn } from 'zustand/traditional';
import { Titles } from '@/entities/models/IAnimeListType';
import InventoryService from '@/features/inventory/lib/InventoryService';
import AnimeService from '@/features/anime/lib/AnimeService';

export const useInventoryStore = createWithEqualityFn<IInventoryStore>(
  (set, get) => ({
    anime: [] as Titles[],
    isLoad: true,
  }),
);
