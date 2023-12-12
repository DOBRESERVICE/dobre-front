import { AxiosResponse } from 'axios';

import { SEOContent } from '@/interfaces';
import { defaultRequest } from '@/shared/api/axios/instances';

export const getSEOContent = async (section: string, key: string): Promise<AxiosResponse<SEOContent>> => {
  return defaultRequest.get(`/page/${section}/${key}`);
};
