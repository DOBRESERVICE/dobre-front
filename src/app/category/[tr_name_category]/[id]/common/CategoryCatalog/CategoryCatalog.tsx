import styles from './CategoryCatalog.module.scss';
import { ProductItem } from '@/components/ProductsContainer/common/ProductItem';
import { FC } from 'react';
import { sortSvg } from '@/assets/image';
import { AvailableNow } from '@/app/category/[tr_name_category]/[id]/common/AvailableNow/AvailableNow';
import { CustomDatePicker } from '@/app/category/[tr_name_category]/[id]/common/CustomDatePicker/CustomDatePicker';
import { CustomSelect } from '@/app/category/[tr_name_category]/[id]/common/CustomSelect/CustomSelect';
import { Product } from '@/interfaces/categories';
import { CustomPagination } from '@/app/category/[tr_name_category]/[id]/common/CustomPagination/CustomPagination';
import { customDateFormSelect, customFormSelect, customLabel, customSelect } from '@/styles/selectStyles';
import { NoProductsFound } from '@/app/category/[tr_name_category]/[id]/common/NoProductsFound/NoProductsFound';

interface CategoryCatalogProps {
  products: Product[];
}
export const CategoryCatalog: FC<CategoryCatalogProps> = ({ products }) => {
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
            <AvailableNow />
            <CustomDatePicker />
          </div>
          <CustomSelect
            label='Сначала новые'
            labelImage={sortSvg}
            selectStyles={customSelect}
            labelStyles={customLabel}
            formControlStyles={customFormSelect}
            selectData={['sss']}
          />
        </div>
      ) : (
        ''
      )}

      <div className={styles.categoryCatalog}>
        {products?.map((product) => (
          <ProductItem
            description={product.description}
            key={product.id_product}
            photoUrl={product.image}
            userUrl={product.userId}
            rentEndDate={product.rent_terms}
            itemName={product.name_product}
            status={product.quality_control}
            rating={2}
            feedbackCount={2}
            sellerInfo={'Организация'}
            isAvailable={product.enabled_product}
            isConfirmed={true}
            rentInfoArray={arr}
          />
        ))}
        {products?.length === 0 && <NoProductsFound />}
      </div>
      {products?.length ? <CustomPagination /> : ''}
    </div>
  );
};
