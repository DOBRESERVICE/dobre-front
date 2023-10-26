import styles from './PopularProducts.module.scss';
import { popularProductsData } from '@/data';
import { CardItem } from '@/components/CardItem/CardItem';
import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
export const PopularProducts = () => {
  return (
    <section className={styles.popularProductsSection}>
      <TopSectionBar barName='Популярно сейчас' hasLinkArrow />
      <div className={styles.gridContainer}>
        {popularProductsData.map((product) => (
          <CardItem key={product.id} imageUrl={product.imageUrl} title={product.title} link='' />
        ))}
      </div>
    </section>
  );
};
