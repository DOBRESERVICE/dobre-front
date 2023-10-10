'use client';
import styles from './AuthLayout.module.scss';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormLayoutProps {
  children: React.ReactNode;
}
export const AuthLayout: React.FC<FormLayoutProps> = ({ children }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoading(true);
      router.push('/');
    }
  }, []);
  if (isLoading) {
    return <div>Loading... </div>;
  }
  return <div className={styles.authWrapper}>{children}</div>;
};
