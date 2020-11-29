import React, { useState, useEffect } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';

import { useProducts } from '../../hooks'

import { ProductList } from './styles';

const Home = () => {
  const { products, addToCart, cart } = useProducts();

  const getAmount = (id) => {
    const item = cart.find((product) => product.id === id);

    if(item) {
      return item.amount;
    }

    return 0;
  }

  return (
    <ProductList>
      {console.log(cart)}
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{formatPrice(product.price)}</span>
            <button
              type="button"
              onClick={() => addToCart(product.id)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
                {getAmount(product.id)}
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
  )
};

export default Home;
