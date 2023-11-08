import { defaultRequest } from '@/api/axios/instances';
import { AxiosResponse } from 'axios';
import { Category, ExactCategory, ExactVariety, SubCategory, Variety } from '@/interfaces/categories';

export const getCertainCategory = async (categoryName: string): Promise<AxiosResponse<ExactCategory>> => {
  return await defaultRequest.get(`/categories/category/${categoryName}`);
};

export const getSubCategory = async (subCategory: string): Promise<AxiosResponse<SubCategory>> => {
  return defaultRequest.get(`/categories/sub/${subCategory}`);
};
export const getCertainVariety = async (variety: string): Promise<AxiosResponse<ExactVariety>> => {
  return defaultRequest.get(`/categories/variety/payalniki`);
};