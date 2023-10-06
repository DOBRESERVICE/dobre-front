import styles from './ToolItem.module.scss';
import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

interface ToolItem {
  imageUrl?: StaticImageData;
  title: string;
}
export const PopularToolItem: FC<ToolItem> = ({ imageUrl, title }) => {
  return (
    <div className={styles.toolWrapper}>
      {imageUrl ? (
        <div className={styles.imageWrapper}>
          <Image src={imageUrl} alt='tool' />{' '}
        </div>
      ) : (
        <div className={styles.emptyCard}> </div>
      )}
      <p>{title}</p>
    </div>
  );
};
