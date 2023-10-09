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
