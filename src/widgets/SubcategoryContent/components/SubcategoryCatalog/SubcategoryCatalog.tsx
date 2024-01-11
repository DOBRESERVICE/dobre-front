'use client';
import { FC } from 'react';

import styles from './SubcategoryCatalog.module.scss';

import { AvailableFilter } from '@/entities/AvailableFilter/AvailableNow';
import { NoProductsFound } from '@/entities/NoProductsFound/NoProductsFound';
import { ProductItem } from '@/entities/ProductItem/ProductItem';
import { Pagination } from '@/interfaces';
import { Product } from '@/interfaces/categories';
import { useAuthData } from '@/shared/context/authContext';
import { customFormSelect, customLabel, customSelect } from '@/shared/styles/selectStyles';
import { CustomDatePicker } from '@/shared/ui/CustomDatePicker/CustomDatePicker';
import { CustomPagination } from '@/shared/ui/CustomPagination/CustomPagination';
import { SortSelect } from '@/shared/ui/SortSelect/SortSelect';

import { sortSvg } from '../../../../shared/image';

interface CategoryCatalogProps {
  products: Product[];
  pagination: Pagination;
}
export enum SortOptions {
  'Сначала новые' = 1,
  'Популярные' = 2,
  'Сначала дешевые' = 3,
  'Сначала дорогие' = 4,
  'Сначала с отзывами' = 5,
}
export interface SortData {
  text: keyof typeof SortOptions;
  value: SortOptions;
}
export const SubcategoryCatalog: FC<CategoryCatalogProps> = ({ products, pagination }) => {
  const pageCount = Math.ceil(pagination?.count / pagination?.limit);
  const sortData: SortData[] = [
    { text: 'Сначала новые', value: SortOptions['Сначала новые'] },
    { text: 'Популярные', value: SortOptions['Популярные'] },
    { text: 'Сначала дешевые', value: SortOptions['Сначала дешевые'] },
    { text: 'Сначала дорогие', value: SortOptions['Сначала дорогие'] },
    { text: 'Сначала с отзывами', value: SortOptions['Сначала с отзывами'] },
  ];
  const { isPending } = useAuthData();
  return (
    <div className={styles.categoryCatalogWrapper}>
      {products?.length ? (
        <div className={styles.content}>
          <div className={styles.buttonsWrapper}>
            <AvailableFilter />
            <CustomDatePicker />
          </div>
          <SortSelect
            labelImage={sortSvg}
            selectStyles={customSelect}
            labelStyles={customLabel}
            formControlStyles={customFormSelect}
            selectData={sortData}
          />
        </div>
      ) : (
        ''
      )}
      {products?.length ? (
        <div className={styles.categoryCatalog}>
          {isPending && (
            <div className={styles.loader}>
              <div className={styles.spinner} />
            </div>
          )}
          {products?.map((product) => (
            <ProductItem
              productId={product.id_product}
              description={product.description}
              key={product.id_product}
              photoUrl={product.image}
              userUrl={product.userId}
              rentEndDate={product.rent_terms}
              itemName={product.name_product}
              status={product.quality_control}
              rating={2}
              feedbackCount={2}
              sellerInfo='Организация'
              isAvailable={product.enabled_product}
              isConfirmed
              rentInfoArray={product.terms}
              // trCategoryName={product.category.tr_name_category}
              // trSubCategoryName={product.subcategory.tr_name_sub}
              id={product.id_product}
            />
          ))}
        </div>
      ) : (
        <NoProductsFound />
      )}
      {products?.length && pageCount > 1 ? <CustomPagination pageCount={pageCount} pagination={pagination} /> : ''}
    </div>
  );
};
