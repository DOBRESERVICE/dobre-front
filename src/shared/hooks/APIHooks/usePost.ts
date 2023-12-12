import useSWR from 'swr/immutable';

import { Post } from '@/interfaces';
import { fetcher } from '@/shared/hooks/APIHooks/useCategories';

export function usePost(section: string) {
  const { data, error, isLoading } = useSWR<Post[]>(`posts/list/${section}`, fetcher);
  return {
    postData: data,
    isLoading,
    isError: error,
  };
}
