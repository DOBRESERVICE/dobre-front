import { AxiosResponse } from 'axios';

import { Post, SEOContent } from '@/interfaces';
import { defaultRequest } from '@/shared/api/axios/instances';

export const getSEOContent = async (section: string, key: string): Promise<AxiosResponse<SEOContent>> => {
  return defaultRequest.get(`/page/${section}/${key}`);
};

export const getPost = async (section: string): Promise<AxiosResponse<Post[]>> => {
  return defaultRequest.get(`/posts/list/${section}`);
};
