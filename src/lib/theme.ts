import { createTheme } from '@mui/material';
import type {} from '@mui/lab/themeAugmentation';

export const theme = createTheme({
  typography: {
    fontFamily: ['"Noto Sans JP"', 'sans-serif'].join(','),
  },
});
