import { useQuery } from '@tanstack/react-query';
import AnimeService from '@/features/anime/lib/AnimeService';

export const GetListTitlesById = ({ arrayId }: { arrayId: string }) => {
  return useQuery({
    queryFn: async () => AnimeService.getAnimeListByArrayId(arrayId),
    queryKey: ['getListTitlesById', arrayId],
    select: ({ data }) => data,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 60 * 24 * 1000,
  });
};
