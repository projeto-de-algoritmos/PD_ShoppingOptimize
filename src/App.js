import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import { ProductsProvider } from './hooks';

import Header from './components/Header';
import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <ProductsProvider>
      <Header />
      <Routes />
    </ProductsProvider>

    <GlobalStyle />
  </BrowserRouter>
);

export default App;
