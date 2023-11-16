import styles from './TopSectionBar.module.scss';
import { FC } from 'react';
import Image from 'next/image';
import { linkArrow } from '../../image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Wrapper } from '@/shared/ui/Wrapper/Wrapper';
interface TopSectionBar {
  barName: string;
  hasLinkArrow: boolean;
  announcements?: string;
  onClick?: () => void;
}
export const TopSectionBar: FC<TopSectionBar> = ({ barName, hasLinkArrow, announcements, onClick }) => {
  return (
    <Wrapper>
      <div className={styles.topSectionBar}>
        <div className={styles.textContent}>
          <h3>{barName}</h3>
          <p>{announcements}</p>
        </div>
        {hasLinkArrow && (
          <div role='button' onClick={onClick} className={styles.linkContainer}>
            <p>Смотреть все</p>
            <div className={styles.linkArrow}>
              <Image src={linkArrow} alt='link arrow' />
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};
