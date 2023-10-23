import styles from './CardItem.module.scss';
import Image from 'next/image';
import { FC } from 'react';

interface CardItem {
  imageUrl?: string;
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
