import styles from '@/components/NewProducts/NewProducts.module.scss';
import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
import classNames from 'classnames';
import { NewProductItem } from '@/components/NewProductItem/NewProductItem';
import { ProductsContainer } from '@/components/ProductsContainer/common/ProductsContainer';

export const Recommendations = () => {
  return (
    <section className={styles.newProductsSection}>
      <TopSectionBar hasLinkArrow barName='Рекомендации для вас' />
      <ProductsContainer />
    </section>
  );
};
