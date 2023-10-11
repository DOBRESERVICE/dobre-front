import styles from './SubCategoryItem.module.scss';
import { FC } from 'react';

interface SubCategoryItem {
  subCategoryName: string;
}
export const SubCategoryItem: FC<SubCategoryItem> = ({ subCategoryName }) => {
  return <li className={`${styles.subCategoryItem} ${styles.active}`}>{subCategoryName}</li>;
};
