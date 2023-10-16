'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import styles from './ConfirmContent.module.scss';
import { useEffect } from 'react';
import { useAuthData } from '@/context/authContext';

export const ConfirmContent = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { isEmailConfirmed, handleConfirmEmail } = useAuthData();
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk4ZDA4NjM5LWU3MjYtNGZmOC05ODk1LTEzYjQ3YzYyMWE1MSIsImVtYWlsIjoici5lbnRpaW5uQGdtYWlsLmNvbSIsImlhdCI6MTY5NzQ0MzQ0OCwiZXhwIjoxNjk4MDQ4MjQ4fQ.8l53XQGxory9FZd0IqIxQWJiaA9jetq50T311iwwvMk';
  const params = useSearchParams();
  const newSearchParams = new URLSearchParams(params);
  newSearchParams.set('token', token);
  useEffect(() => {
    router.push(`${pathName}?${newSearchParams.toString()}`);
  }, []);
  useEffect(() => {
    handleConfirmEmail(token);
    if (isEmailConfirmed) {
      localStorage.setItem('token', token);
      router.push('/');
    }
  }, [isEmailConfirmed]);
  return (
    <div className={styles.content}>
      <p>redirecting...</p>
      <div className={styles.loader}></div>
    </div>
  );
};
