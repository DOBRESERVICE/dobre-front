import { Header } from '@/widgets/Header/Header';
import styles from './HomeLayout.module.scss';
import { Footer } from '../../widgets/Footer/Footer';
import { useEffect } from 'react';
import { useAuthData } from '@/shared/context/authContext';
import { useRouter } from 'next/navigation';
interface LayoutProps {
  children: React.ReactNode;
}
export const HomeLayout: React.FC<LayoutProps> = ({ children }) => {
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
