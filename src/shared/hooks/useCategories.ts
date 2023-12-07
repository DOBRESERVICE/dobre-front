import useSWR from 'swr/immutable';

import { Post } from '@/interfaces';
import { Category } from '@/interfaces/categories';
import { defaultRequest } from '@/shared/api/axios/instances';
import { SectionType } from '@/enums';

export const fetcher = (url: string) => defaultRequest.get(url).then((res) => res.data);
export function useCategories() {
  const { data, error, isLoading } = useSWR<Category[]>('categories', fetcher);
  return {
    categories: data,
    isLoading,
    isError: error,
  };
}
export function usePost(section: string) {
  const { data, error, isLoading } = useSWR<Post[]>(`posts/list/${section}`, fetcher);
  return {
    postData: data,
    isLoading,
    isError: error,
  };
}
