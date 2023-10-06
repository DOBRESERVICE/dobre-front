import styles from './AuthLayout.module.scss';

interface FormLayoutProps {
  children: React.ReactNode;
}
export const AuthLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return <div className={styles.authWrapper}>{children}</div>;
};
