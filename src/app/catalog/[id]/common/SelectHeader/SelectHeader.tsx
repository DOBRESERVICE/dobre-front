import styles from './SelectHeader.module.scss';
import { FC } from 'react';

interface SelectHeader {
  headerName: string;
}
export const SelectHeader: FC<SelectHeader> = ({ headerName }) => {
  return <h2 className={styles.selectHeader}>{headerName}</h2>;
};
