'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './ConfirmContent.module.scss';
import { useEffect } from 'react';
import { useAuthData } from '@/context/authContext';
import { Loader } from '@/components/Loader/Loader';
import { Status } from '@/enums';

export const ConfirmContent = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { isEmailConfirmed, handleConfirmEmail, status } = useAuthData();
  const params = useSearchParams();
  const newSearchParams = new URLSearchParams(params);
  const token = newSearchParams.get('token');
  useEffect(() => {
    router.push(`${pathName}?${newSearchParams.toString()}`);
  }, []);
  useEffect(() => {
    if (!token) return;
    handleConfirmEmail(token);
    if (isEmailConfirmed) {
      localStorage.setItem('token', token);
      router.push('/');
    }
  }, [isEmailConfirmed]);
  if (!token || !isEmailConfirmed) {
    return <div>ERROR : USER NOT FOUND</div>;
  }
  return <div className={styles.content}>{status === Status.LOADING && <Loader />}</div>;
};
