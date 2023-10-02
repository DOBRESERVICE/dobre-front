import styles from './PopularItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface PopularItem {
  imageUrl?: StaticImageData;
  title: string;
}
export const PopularItem: FC<PopularItem> = ({ imageUrl, title }) => {
  return (
    <div className={styles.cardWrapper}>
      {imageUrl && (
        <div className={styles.imageWrapper}>
          <Image src={imageUrl} alt='image' />
        </div>
      )}
      <h3>{title}</h3>
    </div>
  );
};
