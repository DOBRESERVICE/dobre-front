import { FC } from 'react';
import styles from './CategoryItem.module.scss';
import Image from 'next/image';
import { furniture } from '@/assets/image';
import classNames from 'classnames';
interface CategoryItemProps {
  categoryName: string;
  isActive: boolean;
  onClick: () => void;
}
export const CategoryItem: FC<CategoryItemProps> = ({ categoryName, onClick, isActive }) => {
  return (
    <div
      className={classNames(styles.categoryItem, {
        [styles.activeItem]: isActive,
      })}
      role='button'
      onClick={onClick}
    >
      <div className={styles.textContent}>
        <Image src={furniture} alt='furniture' />
        <p>{categoryName}</p>
      </div>
      <div className={styles.arrow}></div>
    </div>
  );
};
