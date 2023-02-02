import React from 'react';

import { injectStores } from '@mobx-devtools/tools';
import { CssBaseline, ThemeProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';

import { App } from './app/App';
import './index.css';
import { theme } from './app/theme';
import { catalogStore } from './vidgets/Catalog/Catalog.store';

injectStores({
  catalogStore,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
