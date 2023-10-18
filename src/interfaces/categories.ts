export interface Categories {
  id_category: string;
  name_category: string;
  tr_name_category: string;
  image_category: string;
  rate_category: number;
  enabled_category: boolean;
  subcategories: Subcategory[];
  varieties: Variety[];
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
  image_variety: string;
  rate_variety: number;
  enabled_variety: boolean;
}
