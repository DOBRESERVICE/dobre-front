import styles from './Recommendations.module.scss';
import { TopSectionBar } from '@/shared/ui/TopSectionBar/TopSectionBar';
import { ProductsContainer } from '@/widgets/ProductsContainer/ProductsContainer';
import { FC } from 'react';
import { Product } from '@/interfaces/categories';

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
