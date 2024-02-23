import styles from './HomeLayout.module.scss';

import { Header } from '@/widgets/Header/Header';

import { Footer } from '../../widgets/Footer/Footer';

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
