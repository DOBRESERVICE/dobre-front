'use client';
import { AuthProvider } from '@/context/authContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { colors } from '@/constants/colors';
import { Manrope } from 'next/font/google';
import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
const queryClient = new QueryClient();
export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>{children}</AuthProvider>;
      </ThemeProvider>
    </QueryClientProvider>
  );
}
