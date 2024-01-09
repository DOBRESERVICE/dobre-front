import { AxiosError } from 'axios';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  TransitionStartFunction,
  useContext,
  useState,
  useTransition,
} from 'react';

import { Status, StatusCode } from '@/enums';

import { confirmEmail, loginUser, recoveryPassword, registerUser, sendEmailOnRecovery } from '../api/authApi';

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
  status: Status;
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  isPending: boolean;
  startTransition: TransitionStartFunction;
  isUserMenuOpen: boolean;
  setIsUserMenuOpen: Dispatch<SetStateAction<boolean>>;
  setStatus: Dispatch<SetStateAction<Status>>;
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
  status: Status.LOADING,
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  isPending: false,
  startTransition: () => {},
  isUserMenuOpen: false,
  setIsUserMenuOpen: () => {},
  setStatus: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isSuccessModalShown, setIsSuccessModalShown] = useState(false);
  const [isLetterSent, setIsLetterSent] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isEmailConfirmed, setIsEmailConfirmed] = useState(false);
  const [isSuccessfulRecovery, setIsSuccessfulRecovery] = useState(false);
  const [isResetModalShown, setIsResetModalShown] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [status, setStatus] = useState<Status>(Status.INIT);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const handleRegister = async (email: string, password: string) => {
    try {
      setStatus(Status.LOADING);
      const response = await registerUser(email, password);
      setUserEmail(response.data.user.email);
      setIsRegistered(true);
      setStatus(Status.SUCCESS);
    } catch (error) {
      setStatus(Status.ERROR);
      setIsRegistered(false);
    } finally {
      setStatus(Status.INIT);
    }
  };
  const handleLogin = async (email: string, password: string) => {
    try {
      setStatus(Status.LOADING);
      const response = await loginUser(email, password);
      localStorage.setItem('token', response.data.authToken);
      setIsLogged(true);
      setStatus(Status.SUCCESS);
    } catch (error) {
      setStatus(Status.ERROR);
      const axiosError = error as AxiosError;
      setIsLogged(false);
      if (axiosError.response?.status === StatusCode.Unauthorized) {
        setErrorText('Доступ запрещен.');
      } else if (axiosError.response?.status === StatusCode.NotFound) {
        setErrorText('Неверные данные.');
      } else {
        setErrorText(`Неизвестная ошибка`);
      }
    } finally {
      setStatus(Status.INIT);
    }
  };
  const handleRecoveryPassword = async (token: string, password: string) => {
    try {
      setStatus(Status.LOADING);
      await recoveryPassword(token, password);
      setIsSuccessfulRecovery(true);
      setStatus(Status.SUCCESS);
    } catch (error) {
      setStatus(Status.ERROR);
      const axiosError = error as AxiosError;
      setIsSuccessfulRecovery(false);
      if (axiosError.response?.status === StatusCode.Unauthorized) {
        setErrorText('Доступ запрещен.');
      } else {
        setErrorText(`Неизвестная ошибка`);
      }
    } finally {
      setStatus(Status.INIT);
    }
  };

  const handleConfirmEmail = async (token: string) => {
    try {
      setStatus(Status.LOADING);
      await confirmEmail(token);
      setIsEmailConfirmed(true);
      setStatus(Status.SUCCESS);
    } catch (error) {
      const axiosError = error as AxiosError;
      setStatus(Status.ERROR);
      setIsEmailConfirmed(false);
      if (axiosError.response?.status === StatusCode.Unauthorized) {
        setErrorText('Доступ запрещен.');
      } else {
        setErrorText(`Неизвестная ошибка`);
      }
    } finally {
      setStatus(Status.INIT);
    }
  };
  const handleSendEmailLetter = async (email: string) => {
    try {
      setStatus(Status.LOADING);
      await sendEmailOnRecovery(email);
      setIsLetterSent(true);
      setStatus(Status.SUCCESS);
    } catch (error) {
      setStatus(Status.ERROR);
      const axiosError = error as AxiosError;
      setIsLetterSent(false);
      if (axiosError.response?.status === StatusCode.Unauthorized) {
        setErrorText('Доступ запрещен.');
      } else {
        setErrorText(`Неизвестная ошибка`);
      }
    } finally {
      setStatus(Status.INIT);
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
    status,
    isMenuOpen,
    setIsMenuOpen,
    isPending,
    startTransition,
    isUserMenuOpen,
    setStatus,
    setIsUserMenuOpen,
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuthData = () => useContext(AuthContext);
