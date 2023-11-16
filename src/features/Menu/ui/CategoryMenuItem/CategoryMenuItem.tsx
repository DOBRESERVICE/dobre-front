import { FC } from 'react';
import styles from './CategoryMenuItem.module.scss';
import Image from 'next/image';
import { furniture } from '../../../../shared/image';
import classNames from 'classnames';
import { useAuthData } from '@/shared/context/authContext';
interface CategoryMenuItemProps {
  categoryName: string;
  isActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}
export const CategoryMenuItem: FC<CategoryMenuItemProps> = ({ categoryName, onClick, isActive, onMouseEnter }) => {
  return (
    <div
      className={classNames(styles.categoryItem, {
        [styles.activeItem]: isActive,
      })}
      role='button'
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      <div className={styles.textContent}>
        <Image src={furniture} alt='furniture' />
        <p>{categoryName}</p>
      </div>
      <div className={styles.arrow}></div>
    </div>
  );
};
