import { useQuery } from '@tanstack/react-query';
import UserService from '@/features/auth/lib/UserService';

export const useProfiles = () => {
  return useQuery({
    queryFn: async () => UserService.fetchUsers(),
    queryKey: ['getAllUsers'],
  });
};
