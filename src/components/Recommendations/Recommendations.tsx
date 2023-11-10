import styles from './Recommendations.module.scss';
import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
import { ProductsContainer } from '@/components/ProductsContainer/common/ProductsContainer';
import { FC } from 'react';
import { Product } from '@/interfaces/categories';

interface RecommendationsProps {
  recommendedProducts: Product[];
}

export const Recommendations: FC<RecommendationsProps> = ({ recommendedProducts }) => {
  return (
    <section className={styles.recommendations}>
      <TopSectionBar hasLinkArrow barName='Рекомендации для вас' />
      <ProductsContainer products={recommendedProducts} />
    </section>
  );
};
