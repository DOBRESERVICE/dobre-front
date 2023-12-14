import Image from 'next/image';
import { FC } from 'react';

import styles from './AboutUsItem.module.scss';

import { aboutUsBlob, aboutUsLine } from '../../../../shared/image';

type AboutItemType = {
  title: string;
  description: string;
  position: 'left' | 'right' | 'bottom';
};

export const AboutUsItem: FC<AboutItemType> = ({ title, description, position }) => {
  return (
    <div className={styles.mainItem}>
      <Image src={aboutUsBlob} alt='blob' className={styles[position]} />
      <div className={styles.itemTitle}>
        <div className={styles.titleContent}>
          <p>{title}</p>
          <Image src={aboutUsLine} alt='line' className={styles.lineTitle} />
        </div>
      </div>
      <div className={styles.itemDescr}>{description}</div>
    </div>
  );
};
