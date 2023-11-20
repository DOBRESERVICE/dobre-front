import Image, { StaticImageData } from 'next/image';
import { FC } from 'react';

import styles from './ConstructionItem.module.scss';

interface ConstructionItem {
  imageUrl: StaticImageData;
  title: string;
}
export const ConstructionItem: FC<ConstructionItem> = ({ imageUrl, title }) => {
  return (
    <div className={styles.constructionItemWrapper}>
      <Image src={imageUrl} alt='img' />
      <h3>{title}</h3>
    </div>
  );
};
