import useSWR from 'swr/immutable';

import { FeatureVariety } from '@/interfaces';
import { fetcher } from '@/shared/hooks/APIHooks/useCategories';

export function useFeatureVariety(tr_name_variety: string) {
  const { data, error, isLoading } = useSWR<FeatureVariety[]>(`features/variety/${tr_name_variety}`, fetcher);
  return {
    featureVariety: data,
    isLoading,
    isError: error,
  };
}
