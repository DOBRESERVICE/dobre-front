import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { loginUser, registerUser } from '@/api/authApi';
import { User } from '@/interfaces';
import { AxiosError } from 'axios';
import { StatusCode } from '@/enums';
import { useRouter } from 'next/navigation';

interface IAuthContext {
  isModalShown: boolean;
  setIsModalShown: Dispatch<SetStateAction<boolean>>;
  handleRegister: (email: string, password: string) => void;
  handleLogin: (email: string, password: string) => void;
  errorText: string;
  userInfo: User | {};
}
export const AuthContext = createContext<IAuthContext>({
  isModalShown: false,
  setIsModalShown: () => {},
  handleRegister: () => {},
  handleLogin: () => {},
  errorText: '',
  userInfo: {},
});

export const AuthProvider = ({ children }: any) => {
  const [userInfo, setUserInfo] = useState<User | {}>({});
  const [isModalShown, setIsModalShown] = useState(false);
  const [errorText, setErrorText] = useState('');
  const router = useRouter();
  const handleRegister = async (email: string, password: string) => {
    try {
      const response = await registerUser(email, password);
      // localStorage.setItem('token', response.data.authToken);
      setIsModalShown(true);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('Error during registration:', axiosError.message);
      setIsModalShown(false);
    }
  };
  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await loginUser(email, password);
      localStorage.setItem('token', response.data.authToken);
      setUserInfo(response.data.user);
      router.push('/');
      console.log(userInfo);
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === StatusCode.Unauthorized) {
        setErrorText('Доступ запрещен.');
      } else if (axiosError.response?.status === StatusCode.NotFound) {
        setErrorText('Неверные данные.');
      } else {
        setErrorText(`Неизвестная ошибка`);
      }
    }
  };
  const contextValue = {
    isModalShown,
    setIsModalShown,
    handleRegister,
    errorText,
    handleLogin,
    userInfo,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuthData = () => useContext(AuthContext);
