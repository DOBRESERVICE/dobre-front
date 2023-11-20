'use client';

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import styles from './CardItem.module.scss';

import { noImage } from '../../shared/image';

interface CardItem {
  imageUrl?: string | StaticImageData | undefined;
  title: string;
  link: string;
}
export const CardItem: FC<CardItem> = ({ imageUrl, title, link }) => {
  const path = usePathname();
  return (
    <Link href={`${path}/${link}`} className={styles.cardWrapper}>
      <div className={styles.imageWrapper}>
        <Image src={imageUrl ? imageUrl : noImage} alt='image' />
      </div>
      <h3>{title}</h3>
    </Link>
  );
};
