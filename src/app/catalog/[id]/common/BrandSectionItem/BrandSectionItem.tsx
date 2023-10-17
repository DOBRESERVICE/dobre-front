import styles from './BrandSectionItem.module.scss';
import { BrandItem } from '@/components/Brands/common/Branditem/BrandItem';
import Image, { StaticImageData } from 'next/image';
import { greyArrowNext } from '@/assets/image';
import { FC } from 'react';

interface BrandSectionItem {
  brandName?: string;
  imageUrl: StaticImageData;
}
export const BrandSectionItem: FC<BrandSectionItem> = ({ brandName, imageUrl }) => {
  return (
    <div className={styles.brandSectionItem}>
      <div className={styles.content}>
        <BrandItem imageUrl={imageUrl} />
        <p>{brandName}</p>
      </div>
      <Image src={greyArrowNext} alt='next' />
    </div>
  );
};
