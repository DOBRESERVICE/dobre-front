import { Header } from '@/components/Header/Header';

interface LayoutProps {
  children: React.ReactNode;
}
export const HomeLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer>крутой футер</footer>
    </>
  );
};
