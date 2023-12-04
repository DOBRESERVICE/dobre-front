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
