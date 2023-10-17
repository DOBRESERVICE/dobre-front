'use client';
import styles from './BreadCrumbs.module.scss';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const BreadCrumbs = () => {
  const pathName = usePathname();
  const segments = pathName.split('/');
  console.log(segments);
  return (
    <div className={styles.breadCrumbsWrapper}>
      {segments.map((segment) => (
        <>
          <Link href={segment === '' ? '/' : segment}>{segment === '' ? 'Главная' : segment}</Link>
          <span>/</span>
        </>
      ))}
    </div>
  );
};
