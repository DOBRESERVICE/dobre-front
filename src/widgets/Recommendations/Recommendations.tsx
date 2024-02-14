import { FC } from 'react';

import styles from './Recommendations.module.scss';

import { Product } from '@/interfaces/categories';
import { TopSectionBar } from '@/shared/ui/TopSectionBar/TopSectionBar';
import { ProductsContainer } from '@/widgets/ProductsContainer/ProductsContainer';
import { mainPageProducts } from '@/shared/data';

interface RecommendationsProps {
  recommendedProducts: Product[];
}

const Recommendations: FC = async () => {
  return (
    <section className={styles.recommendations}>
      <TopSectionBar hasLinkArrow barName='Рекомендации для вас' />
      <ProductsContainer products={mainPageProducts} />
    </section>
  );
};
export default Recommendations;
