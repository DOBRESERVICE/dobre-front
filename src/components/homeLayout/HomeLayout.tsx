import { Header } from '@/components/Header/Header';
import styles from './HomeLayout.module.scss';
import { Footer } from '../Footer/Footer';
import { useEffect } from 'react';
import { useAuthData } from '@/context/authContext';
import { useRouter } from 'next/navigation';
interface LayoutProps {
  children: React.ReactNode;
}
export const HomeLayout: React.FC<LayoutProps> = ({ children }) => {
  const { isAuth } = useAuthData();
  const router = useRouter();
  useEffect(() => {
    if (!isAuth) {
      router.push('/login');
    }
  }, [isAuth]);
  return (
    <>
      <Header />
      <main>
        <div className={styles.homeWrapper}>{children}</div>
      </main>
      <Footer />
    </>
  );
};
