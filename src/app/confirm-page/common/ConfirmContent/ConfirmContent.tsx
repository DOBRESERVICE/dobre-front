'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import styles from './ConfirmContent.module.scss';

import { Status } from '@/enums';
import { Loader } from '@/features/Loader/Loader';
import { useAuthData } from '@/shared/context/authContext';

export const ConfirmContent = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { isEmailConfirmed, handleConfirmEmail, status } = useAuthData();
  const params = useSearchParams();
  const newSearchParams = new URLSearchParams(params);
  const token = newSearchParams.get('token');
  useEffect(() => {
    router.push(`${pathName}?${newSearchParams.toString()}`);
  }, [newSearchParams, pathName, router]);
  useEffect(() => {
    if (!token) return;
    handleConfirmEmail(token);
    if (isEmailConfirmed) {
      localStorage.setItem('token', token);
      router.push('/');
    }
  }, [isEmailConfirmed, handleConfirmEmail, router, token]);
  if (!token || !isEmailConfirmed) {
    return <div>ERROR : USER NOT FOUND</div>;
  }
  return <div className={styles.content}>{status === Status.LOADING && <Loader />}</div>;
};
