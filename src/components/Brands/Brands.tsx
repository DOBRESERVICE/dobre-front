import styles from './Brands.module.scss';
import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
import { brandsData } from '@/data';
import { BrandItem } from '@/components/Brands/common/Branditem/BrandItem';
export const Brands = () => {
  return (
    <section className={styles.brandsSectionWrapper}>
      <TopSectionBar barName='Бренды' hasLinkArrow />
      <div className={styles.brandsContainer}>
        {brandsData.map((item) => (
          <BrandItem key={item.id} imageUrl={item.imageUrl} />
        ))}
      </div>
    </section>
  );
};
