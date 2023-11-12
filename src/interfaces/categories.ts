import { StaticImageData } from 'next/image';

export interface Category {
  id_category: number;
  name_category: string;
  tr_name_category: string;
  image_category: string;
  rate_category: number;
  enabled_category: boolean;
  subcategories: Subcategory[];
  varieties: Variety[];
  products: Product[];
}

export interface ExactCategory extends Category {
  brands: any[];
}
export interface SubCategory {
  id_sub: number;
  name_sub: string;
  tr_name_sub: string;
  image_sub: string;
  rate_sub: number;
  enabled_sub: boolean;
  varieties: Variety[];
  products: Product[];
  brands: any[];
}
export interface Product {
  id_product: number;
  name_product: string;
  tr_name_product: string;
  description: string;
  quality_control: number;
  price_segment: string;
  rent_period: string;
  rent_terms: string;
  quantity: number;
  specs_product: string;
  price: string;
  image: string | StaticImageData;
  enabled_product: boolean;
  is_moderate: boolean;
  userId: any;
  brandIdBrand: any;
  categoryIdCategory: number;
  subcategoryIdSub: number;
  varietyIdVariety: number;
}
export interface Subcategory {
  id_sub: string;
  name_sub: string;
  tr_name_sub: string;
  image_sub: string;
  rate_sub: number;
  enabled_sub: boolean;
  varieties: Variety[];
}

export interface Variety {
  id_variety: string;
  name_variety: string;
  tr_name_variety: string;
  image_variety: string | StaticImageData;
  rate_variety: number;
  enabled_variety: boolean;
}

export interface ExactVariety {
  id_variety: number;
  name_variety: string;
  tr_name_variety: string;
  image_variety: string;
  rate_variety: number;
  enabled_variety: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  categoryIdCategory: number;
  subcategoryIdSub: number;
  category: Category;
  subcategory: Subcategory;
  products: Product[];
  brands: any[];
}

export interface ProductItem {
  id_product: number;
  name_product: string;
  tr_name_product: string;
  description: string;
  quality_control: number;
  price_segment: string;
  rent_period: string;
  rent_terms: string;
  quantity: number;
  specs_product: string;
  price: string;
  image: string;
  enabled_product: boolean;
  is_moderate: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  userId: any;
  brandIdBrand: any;
  categoryIdCategory: number;
  subcategoryIdSub: number;
  varietyIdVariety: number;
  category: Category;
  subcategory: Subcategory;
  variety: Variety;
  terms: Term[];
}

export interface Term {
  id_term: number;
  teek: string;
  period: string;
  price: number;
  term_visible: boolean;
  is_moderate: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  productIdProduct: number;
}
