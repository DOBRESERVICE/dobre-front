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
