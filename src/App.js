import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';

import { GlobalsProvider } from './hooks';

import Header from './components/Header';
import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <GlobalsProvider>
      <Header />
      <Routes />
    </GlobalsProvider>

    <GlobalStyle />
    <ToastContainer autoClose={3000} />
  </BrowserRouter>
);

export default App;
