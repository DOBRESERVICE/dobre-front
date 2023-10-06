import styles from './CardItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface CardItem {
  imageUrl?: StaticImageData;
  title: string;
}
export const CardItem: FC<CardItem> = ({ imageUrl, title }) => {
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
