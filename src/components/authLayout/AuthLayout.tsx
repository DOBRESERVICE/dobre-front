import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthData } from '@/context/authContext';

interface FormLayoutProps {
  children: React.ReactNode;
}
export const AuthLayout: React.FC<FormLayoutProps> = ({ children }) => {
  const { isAuth } = useAuthData();
  console.log(isAuth);
  const router = useRouter();
  useEffect(() => {
    if (isAuth) {
      router.push('/');
    }
    console.log(isAuth);
  }, [isAuth]);
  return <>{children}</>;
};
