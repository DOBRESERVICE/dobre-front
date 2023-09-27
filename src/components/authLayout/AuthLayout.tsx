interface FormLayoutProps {
  children: React.ReactNode;
}
export const AuthLayout: React.FC<FormLayoutProps> = ({ children }) => {
  //protected Layout for checking isAuth
  return <>{children}</>;
};
