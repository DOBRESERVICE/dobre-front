import styles from './TopSectionBar.module.scss';
import { FC } from 'react';
import Image from 'next/image';
import { linkArrow } from '@/assets/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
interface TopSectionBar {
  barName: string;
  hasLinkArrow: boolean;
  announcements?: string;
}
export const TopSectionBar: FC<TopSectionBar> = ({ barName, hasLinkArrow, announcements }) => {
  return (
    <div className={styles.topSectionBar}>
      <div className={styles.textContent}>
        <h3>{barName}</h3>
        <p>{announcements}</p>
      </div>
      {hasLinkArrow && (
        <Link href='/catalog/1' className={styles.linkContainer}>
          <p>Смотреть все</p>
          <div className={styles.linkArrow}>
            <Image src={linkArrow} alt='link arrow' />
          </div>
        </Link>
      )}
    </div>
  );
};
