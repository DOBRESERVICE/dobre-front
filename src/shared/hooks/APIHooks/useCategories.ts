import { defaultRequest } from '@/shared/api/axios/instances';

export const fetcher = (url: string) => defaultRequest.get(url).then((res) => res.data);
// export function useCategories() {
//   const { data, error, isLoading } = useSWR<Category[]>('categories', fetcher);
//   return {
//     categories: data,
//     isLoading,
//     isError: error,
//   };
// }
