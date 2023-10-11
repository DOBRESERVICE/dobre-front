import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { loginUser, registerUser } from '@/api/authApi';
import { User } from '@/interfaces';
import { AxiosError } from 'axios';
import { StatusCode } from '@/enums';
import { useRouter } from 'next/navigation';

interface IAuthContext {
  isModalShown: boolean;
  isResetModalShown: boolean;
  setIsModalShown: Dispatch<SetStateAction<boolean>>;
  setIsResetModalShown: Dispatch<SetStateAction<boolean>>;
  handleRegister: (email: string, password: string) => void;
  handleLogin: (email: string, password: string) => void;
  errorText: string;
  userInfo: User | {};
  setActiveStep: Dispatch<SetStateAction<AuthStep>>;
  activeStep: AuthStep;
}
export const enum AuthStep {
  LOGIN = 'login',
  CREATE = 'create',
  RESET = 'reset',
}
export const AuthContext = createContext<IAuthContext>({
  isModalShown: false,
  isResetModalShown: false,
  setIsModalShown: () => {},
  handleRegister: () => {},
  handleLogin: () => {},
  errorText: '',
  userInfo: {},
  activeStep: AuthStep.LOGIN,
  setActiveStep: () => {},
  setIsResetModalShown: () => {},
});

export const AuthProvider = ({ children }: any) => {
  const [userInfo, setUserInfo] = useState<User | {}>({});
  const [isModalShown, setIsModalShown] = useState(false);
  const [isResetModalShown, setIsResetModalShown] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [activeStep, setActiveStep] = useState<AuthStep>(AuthStep.LOGIN);
  const router = useRouter();
  const handleRegister = async (email: string, password: string) => {
    try {
      const response = await registerUser(email, password);
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
    activeStep,
    setActiveStep,
    isResetModalShown,
    setIsResetModalShown,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuthData = () => useContext(AuthContext);
