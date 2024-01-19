'use client';
import { FC } from 'react';

import styles from './NewProducts.module.scss';

import { NewProduct } from '@/interfaces/categories';
import { TopSectionBar } from '@/shared/ui/TopSectionBar/TopSectionBar';
import { ProductsContainer } from '@/widgets/ProductsContainer/ProductsContainer';

interface NewProductsProps {
  newProducts: NewProduct[];
}
export const NewProducts: FC<NewProductsProps> = ({ newProducts }) => {
  console.log(newProducts);
  return (
    <section className={styles.newProductsSection}>
      <TopSectionBar hasLinkArrow barName='Новинки' />
      <ProductsContainer products={newProducts} />
    </section>
  );
};
