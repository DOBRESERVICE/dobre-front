import styles from './VarietyMenuItem.module.scss';
import Link from 'next/link';
import { FC } from 'react';

interface VarietyMenuItemProps {
  varietyName: string;
}
export const VarietyMenuItem: FC<VarietyMenuItemProps> = ({ varietyName }) => {
  return (
    <Link href='' className={styles.variety}>
      {varietyName}
    </Link>
  );
};
