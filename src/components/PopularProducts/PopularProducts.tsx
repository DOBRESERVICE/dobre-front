import styles from './PopularProducts.module.scss';
import { popularProductsData } from '@/data';
import { PopularItem } from '@/components/PopularProducts/common/PopularItem';
import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
export const PopularProducts = () => {
  return (
    <section className={styles.popularProductsSection}>
      <TopSectionBar barName='Популярно сейчас' hasLinkArrow />
      <div className={styles.gridContainer}>
        {popularProductsData.map((product) => (
          <PopularItem key={product.id} imageUrl={product.imageUrl} title={product.title} />
        ))}
      </div>
    </section>
  );
};
