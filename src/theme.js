import { createTheme } from '@mui/material/styles';

// Light theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
    },
    circle: {
        fill: '#EAEAEA', // Light theme circle color
      },
  },
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#1D1D1D',
      paper: '#1D1D1D',
    },
    text: {
      primary: '#ffffff',
    },
    circle: {
        fill: '#000000', // Light theme circle color
      },
  },
});
