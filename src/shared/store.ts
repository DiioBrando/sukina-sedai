import { create } from 'zustand';
import {
  AnimeList,
  Titles,
} from '@/entities/data/anime-data/lib/IAnimeListType';

export const useAnimeStore = create<AnimeList>((set) => ({
  list: [],
  pagination: { pages: 0, current_page: 1, items_per_page: 20, total_items: 0 },
}));
