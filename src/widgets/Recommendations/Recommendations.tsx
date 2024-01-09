import { FC } from 'react';

import styles from './Recommendations.module.scss';

import { Product } from '@/interfaces/categories';
import { getRecommendedProducts } from '@/shared/api/categoriesApi';
import { TopSectionBar } from '@/shared/ui/TopSectionBar/TopSectionBar';
import { ProductsContainer } from '@/widgets/ProductsContainer/ProductsContainer';

interface RecommendationsProps {
  recommendedProducts: Product[];
}

const Recommendations: FC = async () => {
  const { data: recommendedProductsData } = await getRecommendedProducts();
  return (
    <section className={styles.recommendations}>
      <TopSectionBar hasLinkArrow barName='Рекомендации для вас' />
      <ProductsContainer products={recommendedProductsData} />
    </section>
  );
};
export default Recommendations;
