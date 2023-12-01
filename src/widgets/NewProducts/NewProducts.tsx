import { FC } from 'react';

import styles from './NewProducts.module.scss';

import { Product } from '@/interfaces/categories';
import { TopSectionBar } from '@/shared/ui/TopSectionBar/TopSectionBar';
import { ProductsContainer } from '@/widgets/ProductsContainer/ProductsContainer';

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
