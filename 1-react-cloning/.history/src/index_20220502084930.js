import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Meta from './Meta';
import GlobalStyle from './GlobalStyle';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Meta></Meta>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
