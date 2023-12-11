import { StaticImageData } from 'next/image';

export interface RentInfoData {
  id: number;
  timeInRent: string;
  price: string;
}

export interface SubCategoriesData {
  id: number;
  title: string;
  imageUrl?: StaticImageData;
}

export interface AuthResponse {
  user: User;
  authToken: string;
}
export interface RequestData {
  email: string;
  password: string;
}

export interface User {
  role: string;
  id: string;
  email: string;
  password: string;
  is_activated: boolean;
  updatedAt: string;
  createdAt: string;
  deletedAt: string | null;
}
export interface Post {
  id_post: number;
  header_post: string;
  body_post: string;
  description: string;
  section_post: string;
  key_section: any;
  rate_post: number;
  redirect_url: any;
  post_visible: boolean;
  is_moderate: boolean;
}
export interface SEOContent {
  id_seo: number;
  header_seo: string;
  body_seo: string;
  description: string;
  section_seo: string;
  key_section: string;
  region: string;
  image: any;
  seo_visible: boolean;
}

export interface ProductTestimonial {
  id_testimonial: number;
  text: string;
  group: string;
  testimonial_visible: boolean;
  is_moderate: boolean;
  productIdProduct: number;
  userId: string;
  answ_id: any;
  user: User;
  product: ProductInfo;
  answers: Answer[];
}

export interface User {
  id: string;
  email: string;
  role: string;
  avatar: any;
}

export interface ProductInfo {
  id_product: number;
}

export interface Answer {
  answer: number;
  testimonial: Testimonial;
}

export interface Testimonial {
  id_testimonial: number;
  text: string;
  user: User;
}
