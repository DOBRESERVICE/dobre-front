import { AxiosResponse } from 'axios';

import { FeatureVariety, FilterData, Post, ProductTestimonial } from '@/interfaces';
import { ExactCategory, ExactVariety, NewProduct, Product, ProductItem, SubCategory } from '@/interfaces/categories';
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
export const getFilteredVariety = async (
  variety: string,
  params: { [p: string]: string }
): Promise<AxiosResponse<FilterData>> => {
  return defaultRequest.get(`/catalog/v/${variety}`, { params: params });
};
export const getFilteredSubcategory = async (
  variety: string,
  params: { [p: string]: string }
): Promise<AxiosResponse<FilterData>> => {
  return defaultRequest.get(`/catalog/s/${variety}`, { params: params });
};
export const getProductData = async (productId: string): Promise<AxiosResponse<ProductItem>> => {
  return defaultRequest.get(`/products/${productId}`);
};
export const getNewProducts = async (): Promise<AxiosResponse<NewProduct[]>> => {
  return defaultRequest.get(`/products/new`);
};
export const getRecommendedProducts = async (): Promise<AxiosResponse<Product[]>> => {
  return defaultRequest.get(`/products/recommended`);
};
export const getPost = async (section: string): Promise<AxiosResponse<Post[]>> => {
  return defaultRequest.get(`/posts/list/${section}`);
};
export const getNewCategoryProducts = async (id: string): Promise<AxiosResponse<NewProduct[]>> => {
  return defaultRequest.get(`/products/new`, { params: { id: id } });
};
export const getProductTestimonials = async (productID: number): Promise<AxiosResponse<ProductTestimonial[]>> => {
  return defaultRequest.get(`/testimonials/product/${productID}`);
};
export const getProductFAQ = async (productID: number): Promise<AxiosResponse<ProductTestimonial[]>> => {
  return defaultRequest.get(`/testimonials/product/${productID}`, { params: { faq: true } });
};

export const getVarietyFeatures = async (tr_name_variety: string): Promise<AxiosResponse<FeatureVariety[]>> => {
  return defaultRequest.get(`/features/variety/${tr_name_variety}`);
};
