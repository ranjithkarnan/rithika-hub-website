import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

if (window.location.hash) {
  window.history.replaceState(null, '', window.location.pathname);
  window.scrollTo(0, 0);
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
