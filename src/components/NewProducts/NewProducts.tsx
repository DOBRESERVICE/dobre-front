import { NewProductItem } from '@/components/NewProductItem/NewProductItem';
import styles from './NewProducts.module.scss';
import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
export const NewProducts = () => {
  return (
    <section className={styles.newProductsSection}>
      <TopSectionBar hasLinkArrow barName='Новинки' />
      <div className={styles.newProductsWrapper}>
        <NewProductItem />
        <NewProductItem />
        <NewProductItem />
        <NewProductItem />
        <NewProductItem />
        <NewProductItem />
        <NewProductItem />
      </div>
    </section>
  );
};
