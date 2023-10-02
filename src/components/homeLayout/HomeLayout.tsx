import { Header } from '@/components/Header/Header';
import styles from './HomeLayout.module.scss';
import { Footer } from '../Footer/Footer';
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
