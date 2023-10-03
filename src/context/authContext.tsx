import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface IAuthContext {
  userEmail: string;
  setUserEmail: Dispatch<SetStateAction<string>>;
  isAuth: boolean | null;
}
export const AuthContext = createContext<IAuthContext>({
  userEmail: '',
  setUserEmail: () => {},
  isAuth: null,
});

export const AuthProvider = ({ children }: any) => {
  const [userEmail, setUserEmail] = useState('');
  const isAuth = !!userEmail;
  const contextValue = { userEmail, setUserEmail, isAuth };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuthData = () => useContext(AuthContext);
