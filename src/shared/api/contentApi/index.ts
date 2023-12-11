import { AxiosResponse } from 'axios';
import { ExactCategory } from '@/interfaces/categories';
import { defaultRequest } from '@/shared/api/axios/instances';
import { SEOContent } from '@/interfaces';

export const getSEOContent = async (section: string, key: string): Promise<AxiosResponse<SEOContent>> => {
  return defaultRequest.get(`/page/${section}/${key}`);
};
