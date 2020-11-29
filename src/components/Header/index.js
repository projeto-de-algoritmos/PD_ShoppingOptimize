import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { useGlobals } from '../../hooks'

import { Container, Cart } from './styles';

const Header = () => {
  const { cart } = useGlobals();

  return (
    <Container>
      <Link to="/">
        <h1>Shopping Optimize</h1>
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cart.length} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default Header;
