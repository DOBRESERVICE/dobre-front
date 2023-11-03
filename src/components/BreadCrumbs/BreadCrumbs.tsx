'use client';
import styles from './BreadCrumbs.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

export const BreadCrumbs = () => {
  const pathName = usePathname();
  const segments = pathName.split('/');
  return (
    <div className={styles.breadCrumbsWrapper}>
      {segments.map((segment) => (
        <React.Fragment key={segment}>
          <Link href={segment === '' ? '/' : segment}>{segment === '' ? 'Главная' : segment}</Link>
          <span>/</span>
        </React.Fragment>
      ))}
    </div>
  );
};
