import styles from './SubCategoryItem.module.scss';
import { FC } from 'react';
import classNames from 'classnames';

interface SubCategoryItem {
  subCategoryName: string;
  isActive: boolean;
  onClick: () => void;
}
export const SubCategoryItem: FC<SubCategoryItem> = ({ subCategoryName, isActive, onClick }) => {
  return (
    <li
      className={classNames(styles.subCategoryItem, {
        [styles.active]: isActive,
      })}
      onClick={onClick}
      role='button'
    >
      {subCategoryName}
    </li>
  );
};
