import { createTheme, PaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    folder: PaletteColorOptions;
  }
}

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
    folder: {
      main: '#ffebb7',
    },
    background: {
      default: '#202020',
    },
    text: {
      primary: '#cecece',
    },
  },
});
