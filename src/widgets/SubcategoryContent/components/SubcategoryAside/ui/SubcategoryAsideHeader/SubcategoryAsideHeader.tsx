import styles from './SubcategoryAsideHeader.module.scss';
import { FC } from 'react';

interface SubcategoryAsideHeader {
  headerName: string;
}
export const SelectHeader: FC<SubcategoryAsideHeader> = ({ headerName }) => {
  return <h2 className={styles.selectHeader}>{headerName}</h2>;
};
