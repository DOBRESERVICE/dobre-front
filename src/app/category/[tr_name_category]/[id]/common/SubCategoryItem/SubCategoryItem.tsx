import styles from './SubCategoryItem.module.scss';
import { FC } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

interface SubCategoryItem {
  varietyName: string;
  isActive: boolean;
  onClick: () => void;
  varietyTrName: string;
}
export const SubCategoryItem: FC<SubCategoryItem> = ({ varietyName, isActive, onClick, varietyTrName }) => {
  return (
    <Link
      scroll={false}
      href={`?${new URLSearchParams({ variety: varietyTrName })}`}
      className={classNames(styles.subCategoryItem, {
        [styles.active]: isActive,
      })}
      onClick={onClick}
      role='button'
    >
      {varietyName}
    </Link>
  );
};
