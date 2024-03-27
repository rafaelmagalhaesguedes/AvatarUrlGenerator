import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/GlobalStyle.tsx';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
);
