import { AxiosResponse } from 'axios';

import { Categoryy, SubcategoryData } from '@/interfaces/categories';
import { defaultRequest } from '@/shared/api/axios/instances';

export const getCategory = async (categoryName: string): Promise<AxiosResponse<Categoryy>> => {
  return defaultRequest.get(`/category/${categoryName}`);
};
export const getSubcategory = async (subcategoryName: string): Promise<AxiosResponse<SubcategoryData>> => {
  return defaultRequest.get(`/subcategory/${subcategoryName}`);
};

// export const getSubCategory = async (subCategory: string): Promise<AxiosResponse<SubCategory>> => {
//   return defaultRequest.get(`/categories/sub/${subCategory}`);
// };
// export const getCertainVariety = async (variety: string): Promise<AxiosResponse<ExactVariety>> => {
//   return defaultRequest.get(`/categories/variety/${variety}`);
// };
// export const getFilteredVariety = async (
//   variety: string,
//   params: { [p: string]: string }
// ): Promise<AxiosResponse<FilterData>> => {
//   return defaultRequest.get(`/catalog/v/${variety}`, { params: params });
// };
// export const getFilteredSubcategory = async (
//   variety: string,
//   params: { [p: string]: string }
// ): Promise<AxiosResponse<FilterData>> => {
//   return defaultRequest.get(`/catalog/s/${variety}`, { params: params });
// };
// export const getProductData = async (productId: string): Promise<AxiosResponse<ProductItem>> => {
//   return defaultRequest.get(`/products/${productId}`);
// };
// export const getNewProducts = async (): Promise<AxiosResponse<NewProduct[]>> => {
//   return defaultRequest.get(`/products/new`);
// };
// export const getRecommendedProducts = async (): Promise<AxiosResponse<Product[]>> => {
//   return defaultRequest.get(`/products/recommended`);
// };
// export const getNewCategoryProducts = async (id: string): Promise<AxiosResponse<NewProduct[]>> => {
//   return defaultRequest.get(`/products/new`, { params: { id: id } });
// };
// export const getProductTestimonials = async (productID: number): Promise<AxiosResponse<ProductTestimonial[]>> => {
//   return defaultRequest.get(`/testimonials/product/${productID}`);
// };
// export const getProductFAQ = async (productID: number): Promise<AxiosResponse<ProductTestimonial[]>> => {
//   return defaultRequest.get(`/testimonials/product/${productID}`, { params: { faq: true } });
// };

// export const getVarietyFeatures = async (tr_name_variety: string): Promise<AxiosResponse<FeatureVariety[]>> => {
//   return defaultRequest.get(`/features/variety/${tr_name_variety}`);
// };
