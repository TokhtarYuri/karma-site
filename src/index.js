import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import './i18n';
import { ThemeProvider } from './context/ThemeContext';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
  </BrowserRouter>
);
