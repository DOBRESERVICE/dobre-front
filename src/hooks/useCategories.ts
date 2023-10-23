import useSWR from 'swr/immutable';
import { Category } from '@/interfaces/categories';
import { defaultRequest } from '@/api/axios/instances';
export const fetcher = (url: string, init?: RequestInit) => defaultRequest.get(url).then((res) => res.data);
export function useCategories() {
  const { data, error, isLoading } = useSWR<Category[]>('categories', fetcher);
  return {
    categories: data,
    isLoading,
    isError: error,
  };
}
