import { AxiosResponse } from 'axios';

import { Post } from '@/interfaces';
import { ExactCategory, ExactVariety, Product, ProductItem, SubCategory } from '@/interfaces/categories';
import { defaultRequest } from '@/shared/api/axios/instances';

export const getCertainCategory = async (categoryName: string): Promise<AxiosResponse<ExactCategory>> => {
  return defaultRequest.get(`/categories/category/${categoryName}`);
};

export const getSubCategory = async (subCategory: string): Promise<AxiosResponse<SubCategory>> => {
  return defaultRequest.get(`/categories/sub/${subCategory}`);
};
export const getCertainVariety = async (variety: string): Promise<AxiosResponse<ExactVariety>> => {
  return defaultRequest.get(`/categories/variety/${variety}`);
};
export const getProductData = async (productId: string): Promise<AxiosResponse<ProductItem>> => {
  return defaultRequest.get(`/products/${productId}`);
};
export const getNewProducts = async (): Promise<AxiosResponse<Product[]>> => {
  return defaultRequest.get(`/products/new`);
};
export const getRecommendedProducts = async (): Promise<AxiosResponse<Product[]>> => {
  return defaultRequest.get(`/products/recommended`);
};
export const getPost = async (section: string): Promise<AxiosResponse<Post[]>> => {
  return defaultRequest.get(`/posts/list/${section}`);
};
