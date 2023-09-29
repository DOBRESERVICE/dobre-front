import styles from './TopSectionBar.module.scss';
import { FC } from 'react';
import Image from 'next/image';
import { linkArrow } from '@/assets/image';
interface TopSectionBar {
  barName: string;
  hasLinkArrow: boolean;
}
export const TopSectionBar: FC<TopSectionBar> = ({ barName, hasLinkArrow }) => {
  return (
    <div className={styles.topSectionBar}>
      <h3>{barName}</h3>
      {hasLinkArrow && (
        <div className={styles.linkContainer}>
          <p>Смотреть все</p>
          <div className={styles.linkArrow}>
            <Image src={linkArrow} alt='link arrow' />
          </div>
        </div>
      )}
    </div>
  );
};
