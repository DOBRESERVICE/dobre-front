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
  updatedAt?: string;
  createdAt?: string;
  deletedAt?: string | null;
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
  userId?: string;
  date: string;
  rating: number;
  images?: { id: string; img: StaticImageData }[];
  answ_id: any;
  user: { id: string; email: string; role: string; avatar: any };
  product: ProductInfo;
  answers?: {
    answer: number;
    testimonial: {
      id_testimonial: number;
      text: string;
      user: {
        id: string;
        email: string;
        role: string;
        avatar: null;
        date: string;
      };
    };
  }[];
  answerDate?: string;
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

export interface FeatureVariety {
  id_feature: number;
  name_feature: string;
  tr_name_feature: string;
  type_feature: string;
  array_feature: any;
  group_feature: any;
  values_feature: string[];
  description?: string;
  enabled_feature: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
}

export interface FilterData {
  pagination: Pagination;
  filter: Filter;
  findEntity: FindEntity;
  data: Data[];
}

export interface Pagination {
  page: number;
  limit: number;
  count: number;
}

export interface Filter {}

export interface FindEntity {
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
}

export interface Data {
  id_product: number;
  name_product: string;
  tr_name_product: string;
  residual: any;
  ransom: number;
  image: string;
  insurance: boolean;
  enabled_product: boolean;
  is_blocked: boolean;
  is_moderate: boolean;
  description: string;
  quality_control: number;
  price_segment: string;
  rent_period: string;
  rent_terms: string;
  quantity: number;
  specs_product: string;
  price: string;
  deposit: number;
  userId: string;
  addressIdAddress: number;
  brandIdBrand: number;
  categoryIdCategory: number;
  subcategoryIdSub: number;
  varietyIdVariety: number;
  properties: Property[];
}

export interface Property {
  id_prop: number;
  name_prop: string;
  tr_name_prop: string;
  typevalue: string;
  value: string;
  values: any;
  enabled_prop: any;
  productIdProduct: number;
  featureIdFeature: any;
}
