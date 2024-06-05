import { useQuery } from '@tanstack/react-query';
import AnimeService from '@/features/anime/lib/AnimeService';

export const GetRandomTitle = () => {
  return useQuery({
    queryFn: async () => AnimeService.getRandomAnime(),
    queryKey: ['getRandomTitle'],
    select: ({ data }) => data,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 60 * 24 * 1000,
  });
};
