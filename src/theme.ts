import { createTheme } from '@mui/material';
import { orange } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
    palette: {
      common: {
        grey: string;
      };
    };
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    background: {
      default: '#f0f1f5'
    },
    primary: {
      main: '#4690ff',
      light: '#c2d5fc'
    },
    secondary: {
      main: '#fb617f',
      light: '#f8c6c9'
    },
    info: {
      main: '#feb64d',
      light: '#fddcab'
    },
    warning: {
      main: '#757575',
      light: '#e0e0e0'
    }
  }
});
