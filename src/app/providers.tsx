'use client';
import { AuthProvider } from '@/context/authContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { colors } from '@/constants/colors';
import Manrope from '../fonts/Manrope-Regular.ttf';
const theme = createTheme({
  palette: {
    primary: {
      main: colors.deepBlue,
    },
  },
  // typography: {
  //   fontFamily: Manrope,
  // },
});
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>;
    </ThemeProvider>
  );
}
