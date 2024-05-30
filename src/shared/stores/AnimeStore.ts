import { IAnimeStore, Titles } from '@/entities/models/IAnimeListType';
import AnimeService from '@/features/anime/lib/AnimeService';
import { createWithEqualityFn } from 'zustand/traditional';

export const useAnimeStore = createWithEqualityFn<IAnimeStore>((set, get) => ({
  anime: {} as Titles,
  list: [] as Titles[],
  pagination: { pages: 0, current_page: 1, items_per_page: 24, total_items: 0 },
  isLoad: true,
  isSearch: false,

  getTitles: async () => {
    set({ isLoad: true });
    const { pagination } = get();
    const titles = await AnimeService.getAnimeByLastUpdate(
      pagination.current_page,
      pagination.items_per_page,
    );
    set({
      list: titles.data.list,
      pagination: {
        pages: titles.data.pagination.pages,
        total_items: titles.data.pagination.total_items,
        current_page: pagination.current_page,
        items_per_page: pagination.items_per_page,
      },
    });
    set({ isLoad: false });
  },
  onChangePage: (pageNumber: number) => {
    const { pagination, getTitles } = get();
    set({
      pagination: {
        ...pagination,
        current_page: pageNumber,
      },
    });
    getTitles();
  },
  getAnimeById: async (animeId: number) => {
    set({ isLoad: true });
    const title = await AnimeService.getAnimeById(animeId);
    set({ anime: title.data });
    set({ isLoad: false });
  },
}));
