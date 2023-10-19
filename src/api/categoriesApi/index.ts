import { defaultRequest } from '@/api/axios/instances';
import { AxiosResponse } from 'axios';
import { Categories } from '@/interfaces/categories';

export const getCategories = async (): Promise<AxiosResponse<Categories[]>> => {
  return defaultRequest.get(`/categories`);
};
