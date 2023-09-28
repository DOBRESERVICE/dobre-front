import Image from 'next/image';
import styles from './AboutUsItem.module.scss';
import { aboutUsBlob, aboutUsLine } from '@/assets/image';

type AboutItemType = {
  title: string;
  description: string;
  position: 'left' | 'right' | 'bottom';
};

export const AboutUsItem = ({ title, description, position }: AboutItemType) => {
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
