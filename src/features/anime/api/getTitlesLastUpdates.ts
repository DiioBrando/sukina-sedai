import { useQuery } from '@tanstack/react-query';
import AnimeService from '@/features/anime/lib/AnimeService';

export const GetTitlesLastUpdates = ({
  currentPage,
  itemsPerPage,
}: {
  currentPage: number;
  itemsPerPage: number;
}) => {
  return useQuery({
    queryFn: async () =>
      AnimeService.getAnimeByLastUpdate(currentPage, itemsPerPage),
    queryKey: ['getTitles'],
    select: ({ data }) => data,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 60 * 24 * 1000,
  });
};
