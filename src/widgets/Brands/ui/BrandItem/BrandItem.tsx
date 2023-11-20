import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import styles from './BrandItem.module.scss';

interface BrandItem {
  imageUrl: StaticImageData;
}
export const BrandItem: FC<BrandItem> = ({ imageUrl }) => {
  return (
    <div className={styles.brandWrapper}>
      {imageUrl ? <Image src={imageUrl} alt='brand image' /> : <div className={styles.emptyCard}> </div>}
    </div>
  );
};
