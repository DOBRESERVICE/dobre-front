import styles from './PopularProducts.module.scss';

import { CardItem } from '@/entities/CardItem/CardItem';
import { popularProductsData } from '@/shared/data';
import { TopSectionBar } from '@/shared/ui/TopSectionBar/TopSectionBar';

export const PopularProducts = () => {
  return (
    <section className={styles.popularProductsSection}>
      <TopSectionBar barName='Популярно сейчас' hasLinkArrow />
      <div className={styles.gridContainer}>
        {popularProductsData.map((product) => (
          <CardItem link='/' key={product.id} imageUrl={product.imageUrl} title={product.title} />
        ))}
      </div>
    </section>
  );
};
