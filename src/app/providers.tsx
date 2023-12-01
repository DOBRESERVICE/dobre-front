'use client';

import { createTheme,ThemeProvider } from '@mui/material/styles';
import { Manrope } from 'next/font/google';
import { ReactNode } from 'react';

import { AuthProvider } from '@/shared/context/authContext';
import { MUIColors } from '@/shared/styles/MUIColors';

const manrope = Manrope({
  style: ['normal'],
  subsets: ['latin'],
});

const theme = createTheme({
  palette: {
    primary: {
      main: MUIColors.deepBlue,
    },
  },
  typography: {
    fontFamily: manrope.style.fontFamily,
  },
});
export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};
