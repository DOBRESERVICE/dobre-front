'use client';
import styles from './BreadCrumbs.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { FC } from 'react';

interface BreadCrumbsSegment {
  id: number;
  link: string;
  linkName: string;
}

interface BreadCrumbsProps {
  breadCrumbsData: BreadCrumbsSegment[];
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ breadCrumbsData }) => {
  return (
    <div className={styles.breadCrumbsWrapper}>
      {breadCrumbsData.map((segment) => (
        <React.Fragment key={segment.id}>
          <Link href={segment.link}>{segment.linkName}</Link>
          <span>/</span>
        </React.Fragment>
      ))}
    </div>
  );
};
