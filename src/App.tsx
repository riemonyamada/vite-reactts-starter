import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@src/lib/theme';
import { Loading } from '@src/common/components/Loading';
import { AppRoutes } from '@src/routes';

export function App() {
  return (
    <React.Suspense fallback={Loading()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </React.Suspense>
  );
}
