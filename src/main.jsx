import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { AppRouter } from './app/router/AppRouter.jsx';
import { ThemeProvider } from './app/providers/ThemeProvider.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRouter />
      <Toaster position="top-right" toastOptions={{ duration: 2600 }} />
    </ThemeProvider>
  </React.StrictMode>,
);
