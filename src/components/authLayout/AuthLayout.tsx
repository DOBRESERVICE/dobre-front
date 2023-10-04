import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthData } from '@/context/authContext';

interface FormLayoutProps {
  children: React.ReactNode;
}
export const AuthLayout: React.FC<FormLayoutProps> = ({ children }) => {
  return <>{children}</>;
};
