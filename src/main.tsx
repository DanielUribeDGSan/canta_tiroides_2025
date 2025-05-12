import React from 'react';
import ReactDOM from 'react-dom/client';
import DanoneApp from './DanoneApp.tsx';
// import './styles/utils.scss';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DanoneApp />
  </React.StrictMode>
);
