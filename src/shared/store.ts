import { create } from 'zustand';
import { ILoad } from '@/entities/data/anime-data/lib/IAnimeListType';
import { IAuthBoolean } from '@/entities/models/IAuth';

export const useAnimeStore = create<ILoad>((set) => ({
  list: [],
  pagination: { pages: 0, current_page: 1, items_per_page: 20, total_items: 0 },
  isLoad: true,
}));
