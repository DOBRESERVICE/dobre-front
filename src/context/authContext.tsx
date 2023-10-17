import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { confirmEmail, loginUser, recoveryPassword, registerUser, sendEmailOnRecovery } from '@/api/authApi';
import { AxiosError } from 'axios';
import { StatusCode } from '@/enums';

interface IAuthContext {
  isSuccessModalShown: boolean;
  isResetModalShown: boolean;
  setIsSuccessModalShown: Dispatch<SetStateAction<boolean>>;
  setIsResetModalShown: Dispatch<SetStateAction<boolean>>;
  handleRegister: (email: string, password: string) => void;
  handleLogin: (email: string, password: string) => void;
  handleRecoveryPassword: (token: string, password: string) => void;
  handleConfirmEmail: (token: string) => void;
  handleSendEmailLetter: (email: string) => void;
  setIsLetterSent: Dispatch<SetStateAction<boolean>>;
  setIsRegistered: Dispatch<SetStateAction<boolean>>;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  errorText: string;
  isSuccessfulRecovery: boolean;
  isEmailConfirmed: boolean;
  isLetterSent: boolean;
  isRegistered: boolean;
  isLogged: boolean;
  userEmail: string;
}

export const AuthContext = createContext<IAuthContext>({
  setIsSuccessModalShown: () => {},
  setIsRegistered: () => {},
  setIsLetterSent: () => {},
  handleRegister: () => {},
  handleLogin: () => {},
  handleRecoveryPassword: () => {},
  handleConfirmEmail: () => {},
  handleSendEmailLetter: () => {},
  setIsResetModalShown: () => {},
  setIsLogged: () => {},
  errorText: '',
  isSuccessModalShown: false,
  isResetModalShown: false,
  isEmailConfirmed: false,
  isSuccessfulRecovery: false,
  isLetterSent: false,
  isRegistered: false,
  isLogged: false,
  userEmail: '',
});

export const AuthProvider = ({ children }: any) => {
  const [isSuccessModalShown, setIsSuccessModalShown] = useState(false);
  const [isLetterSent, setIsLetterSent] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
  const [isSuccessfulRecovery, setIsSuccessfulRecovery] = useState(false);
  const [isResetModalShown, setIsResetModalShown] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const handleRegister = async (email: string, password: string) => {
    try {
      const response = await registerUser(email, password);
      setUserEmail(response.data.user.email);
      setIsRegistered(true);
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('Error during registration:', axiosError.message);
      setIsRegistered(false);
    }
  };
  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await loginUser(email, password);
      localStorage.setItem('token', response.data.authToken);
      setIsLogged(true);
    } catch (error) {
      const axiosError = error as AxiosError;
      setIsLogged(false);
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
    isSuccessModalShown,
    setIsSuccessModalShown,
    handleRegister,
    errorText,
    handleLogin,
    isResetModalShown,
    setIsResetModalShown,
    handleRecoveryPassword,
    isSuccessfulRecovery,
    isEmailConfirmed,
    handleConfirmEmail,
    handleSendEmailLetter,
    isLetterSent,
    isRegistered,
    isLogged,
    userEmail,
    setIsRegistered,
    setIsLetterSent,
    setIsLogged,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuthData = () => useContext(AuthContext);
