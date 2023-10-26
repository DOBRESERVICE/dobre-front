import styles from './CategoryCatalog.module.scss';
import { ProductItem } from '@/components/ProductsContainer/common/ProductItem';
import { FC } from 'react';
import { sortSvg } from '@/assets/image';
import { AvailableNow } from '@/app/category/[tr_name_category]/[id]/common/AvailableNow/AvailableNow';
import { CustomDatePicker } from '@/app/category/[tr_name_category]/[id]/common/CustomDatePicker/CustomDatePicker';
import { CustomSelect } from '@/app/category/[tr_name_category]/[id]/common/CustomSelect/CustomSelect';
import { Product } from '@/interfaces/categories';
import { CustomPagination } from '@/app/category/[tr_name_category]/[id]/common/CustomPagination/CustomPagination';

interface CategoryCatalogProps {
  products: Product[];
}
export const CategoryCatalog: FC<CategoryCatalogProps> = ({ products }) => {
  const arr = [
    {
      id: 1,
      timeInRent: 'string',
      price: '123',
    },
  ];
  return (
    <div className={styles.categoryCatalogWrapper}>
      <div className={styles.content}>
        <div className={styles.buttonsWrapper}>
          <AvailableNow />
          <CustomDatePicker />
        </div>
        <CustomSelect label='Сначала новые' labelImage={sortSvg} />
      </div>

      <div className={styles.categoryCatalog}>
        {products.map((product) => (
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
            sellerInfo={'asfasf'}
            isAvailable={product.enabled_product}
            isConfirmed={true}
            rentInfoArray={arr}
          />
        ))}
      </div>
      <CustomPagination />
    </div>
  );
};
