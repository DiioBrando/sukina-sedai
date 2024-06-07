import { useQuery } from '@tanstack/react-query';
import InventoryService from '@/features/inventory/lib/InventoryService';

export const GetAllInventory = ({
  userId,
  categoryAnime,
}: {
  userId: string;
  categoryAnime: string;
}) => {
  return useQuery({
    queryFn: async () =>
      InventoryService.getAllInventory(userId, categoryAnime),
    queryKey: ['getListTitlesById', userId, categoryAnime],
    select: ({ data }) => data,
    refetchOnWindowFocus: false,
    refetchInterval: 60 * 60 * 24 * 1000,
  });
};
