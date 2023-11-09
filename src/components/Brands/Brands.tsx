import styles from './Brands.module.scss';
import { TopSectionBar } from '@/components/TopSectionBar/TopSectionBar';
import { brandsData } from '@/data';
import { BrandItem } from '@/components/Brands/common/Branditem/BrandItem';
import { Wrapper } from '@/components/Wrapper/Wrapper';
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
