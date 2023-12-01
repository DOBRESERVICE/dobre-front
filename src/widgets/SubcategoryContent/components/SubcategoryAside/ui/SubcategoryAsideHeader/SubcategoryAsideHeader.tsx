import { FC } from 'react';

import styles from './SubcategoryAsideHeader.module.scss';

interface SubcategoryAsideHeader {
  headerName: string;
}
export const SelectHeader: FC<SubcategoryAsideHeader> = ({ headerName }) => {
  return <h2 className={styles.selectHeader}>{headerName}</h2>;
};
