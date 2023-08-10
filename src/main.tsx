import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container!);

// const handleDeepLink = () => {
//   const url = new URL(window.location.href);
//   if (url.protocol === 'myapp:') {
//     const path = url.pathname.replace(/^\//, '');
//     window.location.href = '/' + path;
//   }
// };

// // Listen for deep link event
// window.addEventListener('deep-link', handleDeepLink);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);