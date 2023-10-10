'use client';
import { AuthProvider } from '@/context/authContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { colors } from '@/constants/colors';
const theme = createTheme({
  palette: {
    primary: {
      main: colors.deepBlue,
    },
  },
});
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>;
    </ThemeProvider>
  );
}
