'use client';
import styles from './ToolItem.module.scss';
import Image from 'next/image';
import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ToolItem {
  imageUrl?: string;
  title: string;
  subCategoryTrName: string;
  varietyTrName: string;
}
export const PopularToolItem: FC<ToolItem> = ({ imageUrl, title, subCategoryTrName, varietyTrName }) => {
  const path = usePathname();
  return (
    <Link href={`${path}/${subCategoryTrName}?variety=${varietyTrName}`} className={styles.toolWrapper}>
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
