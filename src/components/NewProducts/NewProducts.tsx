import styles from './NewProducts.module.scss';
import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
import { ProductsContainer } from '@/components/ProductsContainer/common/ProductsContainer';
import { FC } from 'react';
import { Product } from '@/interfaces/categories';
import { getNewProducts } from '@/api/categoriesApi';

interface NewProductsProps {
  newProducts: Product[] | any[];
}
export const NewProducts: FC<NewProductsProps> = ({ newProducts }) => {
  return (
    <section className={styles.newProductsSection}>
      <TopSectionBar hasLinkArrow barName='Новинки' />
      <ProductsContainer products={newProducts} />
    </section>
  );
};
