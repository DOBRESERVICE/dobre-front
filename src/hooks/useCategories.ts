import { defaultRequest } from '@/api/axios/instances';
import { useQuery } from '@tanstack/react-query';

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () => defaultRequest.get('categories').then((res) => res.data),
  });
}
