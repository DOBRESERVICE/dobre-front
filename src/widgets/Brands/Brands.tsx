import styles from './Brands.module.scss';

import { brandsData } from '@/shared/data';
import { TopSectionBar } from '@/shared/ui/TopSectionBar/TopSectionBar';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';

import { BrandItem } from './ui/BrandItem/BrandItem';

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
