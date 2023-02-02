import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#00ffbe',
    },
    secondary: {
      main: '#3d3d3d',
    },
    warning: {
      main: '#ff005c',
    },
    info: {
      main: '#ffebb7',
    },
    background: {
      default: '#202020',
    },
    text: {
      primary: '#cecece',
    },
  },
  typography: {
    fontWeightRegular: 300,
    fontWeightMedium: 400,
    body1: {
      lineHeight: 1.2,
    },
  },
});
