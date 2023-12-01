import { FC } from 'react';

import styles from './SubcategoryCatalog.module.scss';

import { AvailableFilter } from '@/entities/AvailableFilter/AvailableNow';
import { NoProductsFound } from '@/entities/NoProductsFound/NoProductsFound';
import { ProductItem } from '@/entities/ProductItem/ProductItem';
import { Product } from '@/interfaces/categories';
import { customFormSelect, customLabel, customSelect } from '@/shared/styles/selectStyles';
import { CustomDatePicker } from '@/shared/ui/CustomDatePicker/CustomDatePicker';
import { CustomPagination } from '@/shared/ui/CustomPagination/CustomPagination';
import { CustomSelect } from '@/shared/ui/CustomSelect/CustomSelect';

import { sortSvg } from '../../../../shared/image';

interface CategoryCatalogProps {
  products: Product[];
}
export const SubcategoryCatalog: FC<CategoryCatalogProps> = ({ products }) => {
  const arr = [
    {
      id: 1,
      timeInRent: '1 неделя',
      price: '1 799 руб.',
    },
    {
      id: 2,
      timeInRent: '1 месяц',
      price: '3 930 руб.',
    },
    {
      id: 3,
      timeInRent: '2 месяца',
      price: '13 450 руб.',
    },
  ];
  return (
    <div className={styles.categoryCatalogWrapper}>
      {products?.length ? (
        <div className={styles.content}>
          <div className={styles.buttonsWrapper}>
            <AvailableFilter />
            <CustomDatePicker />
          </div>
          <CustomSelect
            label='Сначала новые'
            labelImage={sortSvg}
            selectStyles={customSelect}
            labelStyles={customLabel}
            formControlStyles={customFormSelect}
            selectData={['Сначала новые', 'Популярные', 'Сначала дешевые', 'Сначала дорогие', 'Сначала с отзывами']}
          />
        </div>
      ) : (
        ''
      )}
      {products?.length ? (
        <div className={styles.categoryCatalog}>
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
              rentInfoArray={arr}
            />
          ))}
        </div>
      ) : (
        <NoProductsFound />
      )}
      {products?.length ? <CustomPagination /> : ''}
    </div>
  );
};
