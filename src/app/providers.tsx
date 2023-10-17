'use client';
import { AuthProvider } from '@/context/authContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { colors } from '@/constants/colors';
import { Manrope } from 'next/font/google';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const manrope = Manrope({
  style: ['normal'],
  subsets: ['latin'],
});

const theme = createTheme({
  palette: {
    primary: {
      main: colors.deepBlue,
    },
  },
  typography: {
    fontFamily: manrope.style.fontFamily,
  },
});
export function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AuthProvider>{children}</AuthProvider>;
      </ThemeProvider>
    </Provider>
  );
}
