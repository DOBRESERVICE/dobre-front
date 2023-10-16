import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { confirmEmail, loginUser, recoveryPassword, registerUser, sendEmailOnRecovery } from '@/api/authApi';
import { AxiosError } from 'axios';
import { StatusCode } from '@/enums';

interface IAuthContext {
  isModalShown: boolean;
  isResetModalShown: boolean;
  setIsModalShown: Dispatch<SetStateAction<boolean>>;
  setIsResetModalShown: Dispatch<SetStateAction<boolean>>;
  handleRegister: (email: string, password: string) => void;
  handleLogin: (email: string, password: string) => void;
  handleRecoveryPassword: (token: string, password: string) => void;
  handleConfirmEmail: (token: string) => void;
  handleSendEmailLetter: (email: string) => void;
  errorText: string;
  setActiveStep: Dispatch<SetStateAction<AuthStep>>;
  activeStep: AuthStep;
  isSuccessfulRecovery: boolean;
  isEmailConfirmed: boolean;
  isLetterSent: boolean;
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
  handleRecoveryPassword: () => {},
  handleConfirmEmail: () => {},
  handleSendEmailLetter: () => {},
  errorText: '',
  activeStep: AuthStep.LOGIN,
  setActiveStep: () => {},
  setIsResetModalShown: () => {},
  isEmailConfirmed: false,
  isSuccessfulRecovery: false,
  isLetterSent: false,
});

export const AuthProvider = ({ children }: any) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [isLetterSent, setIsLetterSent] = useState(false);
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
  const [isSuccessfulRecovery, setIsSuccessfulRecovery] = useState(false);
  const [isResetModalShown, setIsResetModalShown] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [activeStep, setActiveStep] = useState<AuthStep>(AuthStep.LOGIN);
  const handleRegister = async (email: string, password: string) => {
    try {
      await registerUser(email, password);
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
  const handleRecoveryPassword = async (token: string, password: string) => {
    try {
      await recoveryPassword(token, password);
      setIsSuccessfulRecovery(true);
    } catch (error) {
      const axiosError = error as AxiosError;
      setIsSuccessfulRecovery(false);
      if (axiosError.response?.status === StatusCode.Unauthorized) {
        setErrorText('Доступ запрещен.');
      } else {
        setErrorText(`Неизвестная ошибка`);
      }
    }
  };

  const handleConfirmEmail = async (token: string) => {
    try {
      await confirmEmail(token);
      setIsEmailConfirmed(true);
    } catch (error) {
      const axiosError = error as AxiosError;
      setIsEmailConfirmed(false);
      if (axiosError.response?.status === StatusCode.Unauthorized) {
        setErrorText('Доступ запрещен.');
      } else {
        setErrorText(`Неизвестная ошибка`);
      }
    }
  };
  const handleSendEmailLetter = async (email: string) => {
    try {
      await sendEmailOnRecovery(email);
      setIsLetterSent(true);
      setIsResetModalShown(true);
    } catch (error) {
      const axiosError = error as AxiosError;
      setIsLetterSent(false);
      if (axiosError.response?.status === StatusCode.Unauthorized) {
        setErrorText('Доступ запрещен.');
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
    activeStep,
    setActiveStep,
    isResetModalShown,
    setIsResetModalShown,
    handleRecoveryPassword,
    isSuccessfulRecovery,
    isEmailConfirmed,
    handleConfirmEmail,
    handleSendEmailLetter,
    isLetterSent,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuthData = () => useContext(AuthContext);
