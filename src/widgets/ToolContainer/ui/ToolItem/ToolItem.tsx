'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import styles from './ToolItem.module.scss';

interface ToolItem {
  imageUrl?: string;
  title: string;
  subCategoryTrName: string;
  varietyTrName: string;
  link: string;
}
export const ToolItem: FC<ToolItem> = ({ link, imageUrl, title, subCategoryTrName, varietyTrName }) => {
  const path = usePathname();
  return (
    <Link href={link || `${path}/${subCategoryTrName}?variety=${varietyTrName}`} className={styles.toolWrapper}>
      {imageUrl ? (
        <div className={styles.imageWrapper}>
          <Image src={imageUrl} alt='tool' />
        </div>
      ) : (
        <div className={styles.emptyCard}> </div>
      )}
      <p>{title}</p>
    </Link>
  );
};
