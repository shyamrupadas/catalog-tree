import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';

import { App } from './app/App';
import './index.css';
import { theme } from './app/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
