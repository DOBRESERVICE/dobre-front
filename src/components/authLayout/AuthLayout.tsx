'use client';
import styles from './AuthLayout.module.scss';
import { FC, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { DOBRE, dobreBanner, dobreWhiteLogo } from '@/assets/image';

interface FormLayoutProps {
  children: ReactNode;
}
export const AuthLayout: FC<FormLayoutProps> = ({ children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoading(true);
      router.push('/');
    }
  }, [isLoading]);
  if (isLoading) {
    return <div>Loading... </div>;
  }
  return (
    <div className={styles.authWrapper}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <div>
            <Image src={dobreWhiteLogo} alt='logo' />
          </div>
          <p>Легко арендовать и безопасно сдавать</p>
          <Image src={dobreBanner} alt='banner' />
        </div>
        <div className={styles.wrapper}>{children}</div>
      </div>
      <div className={styles.dobreImage}>
        <Image src={DOBRE} alt='DOBRE' />
      </div>
    </div>
  );
};
