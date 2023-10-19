import useSWR, { Fetcher } from 'swr';
import { Categories } from '@/interfaces/categories';
import { defaultRequest } from '@/api/axios/instances';
import axios from 'axios';
export const fetcher = (url: string, init?: RequestInit) => defaultRequest.get(url).then((res) => res.data);
export function useCategories() {
  const { data, error, isLoading } = useSWR<Categories[]>('categories', fetcher);
  console.log(data);
  return {
    categories: data,
    isLoading,
    isError: error,
  };
}
