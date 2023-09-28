import styles from './NewProducts.module.scss';
import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
import classNames from 'classnames';
import { ProductsContainer } from '@/components/ProductsContainer/ProductsContainer';
export const NewProducts = () => {
  return (
    <section className={styles.newProductsSection}>
      <TopSectionBar hasLinkArrow barName='Новинки' />
      <ProductsContainer />
    </section>
  );
};
