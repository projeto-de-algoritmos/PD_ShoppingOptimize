import React from 'react';
import { BrowserRouter } from 'react-router-dom';

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
  </BrowserRouter>
);

export default App;
