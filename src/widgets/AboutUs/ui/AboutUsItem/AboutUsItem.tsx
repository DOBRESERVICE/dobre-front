import Image from 'next/image';
import styles from './AboutUsItem.module.scss';
import { aboutUsBlob, aboutUsLine } from '../../../../shared/image';
import { FC } from 'react';

type AboutItemType = {
  title: string;
  description: string;
  position: 'left' | 'right' | 'bottom';
};

export const AboutUsItem: FC<AboutItemType> = ({ title, description, position }) => {
  return (
    <div className={styles.mainItem}>
      <div className={styles.itemTitle}>
        {title}
        <Image src={aboutUsLine} alt='line' className={styles.lineTitle} />
        <Image src={aboutUsBlob} alt='blob' className={styles[position]} />
      </div>
      <div className={styles.itemDescr}>{description}</div>
    </div>
  );
};
