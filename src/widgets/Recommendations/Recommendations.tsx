import { FC } from 'react';

import styles from './Recommendations.module.scss';

import { Product } from '@/interfaces/categories';
import { TopSectionBar } from '@/shared/ui/TopSectionBar/TopSectionBar';
import { ProductsContainer } from '@/widgets/ProductsContainer/ProductsContainer';

interface RecommendationsProps {
  recommendedProducts: Product[];
}

const Recommendations: FC<RecommendationsProps> = ({ recommendedProducts }) => {
  return (
    <section className={styles.recommendations}>
      <TopSectionBar hasLinkArrow barName='Рекомендации для вас' />
      <ProductsContainer products={recommendedProducts} />
    </section>
  );
};
export default Recommendations;
