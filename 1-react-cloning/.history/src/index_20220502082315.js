import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Meta from './Meta';
import GlobalStyle from './GlobalStyle';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Meta></Meta>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
