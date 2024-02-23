'use client';

import Link from 'next/link';
import React, { FC } from 'react';

import styles from './BreadCrumbs.module.scss';

interface BreadCrumbsSegment {
  id: number;
  link: string;
  linkName: string | undefined;
}

interface BreadCrumbsProps {
  breadCrumbsData: BreadCrumbsSegment[];
}

export const BreadCrumbs: FC<BreadCrumbsProps> = ({ breadCrumbsData }) => {
  return (
    <div className={styles.breadCrumbsWrapper}>
      {breadCrumbsData
        .filter((item) => item.linkName !== undefined)
        .map((segment) => (
          <React.Fragment key={segment.id}>
            <Link href={segment.link}>{segment.linkName}</Link>
            <span>/</span>
          </React.Fragment>
        ))}
    </div>
  );
};
