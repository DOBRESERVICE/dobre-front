'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, ReactNode, useEffect, useState } from 'react';

import styles from './AuthLayout.module.scss';

import { Status } from '@/enums';
import { Loader } from '@/features/Loader/Loader';
import { useAuthData } from '@/shared/context/authContext';

import { DOBRE, dobreBanner, leftWhiteSliderIcon } from '../../shared/image';

interface FormLayoutProps {
  children: ReactNode;
}
export const AuthLayout: FC<FormLayoutProps> = ({ children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { status } = useAuthData();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoading(true);
      router.push('/');
    }
  }, [isLoading, router]);
  if (isLoading) {
    return <div>Loading... </div>;
  }
  if (status === Status.LOADING) {
    return <Loader />;
  }
  return (
    <div className={styles.authWrapper}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image src={dobreBanner} alt='banner' />
        </div>
        <Image
          src={leftWhiteSliderIcon}
          alt='prev'
          role='button'
          onClick={() => router.back()}
          className={styles.arrowBack}
        />

        <div className={styles.wrapper}>{children}</div>
      </div>
      <div className={styles.dobreImage}>
        <Image src={DOBRE} alt='DOBRE' />
      </div>
    </div>
  );
};
