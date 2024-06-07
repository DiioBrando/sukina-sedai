import AnimeService from '@/features/anime/lib/AnimeService';
import { useQuery } from '@tanstack/react-query';

export const GetTitleById = ({ id }: { id: number }) => {
  return useQuery({
    queryFn: async () => AnimeService.getAnimeById(id),
    queryKey: ['getTitleById', id],
    select: ({ data }) => data,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 60 * 24 * 1000,
  });
};
