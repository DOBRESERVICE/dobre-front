import styles from './Brands.module.scss';
import { TopSectionBar } from '@/shared/ui/TopSectionBar/TopSectionBar';
import { brandsData } from '@/shared/data';
import { BrandItem } from './ui/BrandItem/BrandItem';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
export const Brands = () => {
  return (
    <Wrapper>
      <section className={styles.brandsSectionWrapper}>
        <TopSectionBar barName='Бренды' hasLinkArrow />
        <div className={styles.brandsContainer}>
          {brandsData.map((item) => (
            <BrandItem key={item.id} imageUrl={item.imageUrl} />
          ))}
        </div>
      </section>
    </Wrapper>
  );
};
