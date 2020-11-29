import React, { useState, useEffect } from 'react';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { useGlobals } from '../../hooks';

import { formatPrice } from '../../util/format';

import { Container, ProductTable, Total } from './styles';

const  Cart = () => {
  const [total, setTotal] = useState(0);
  const [wallet, setWallet] = useState(0);
  const {
    cart,
    addToCart,
    removeQntFromCart,
    removeItemFromCart,
    incrementPriority,
    decrementPriority
  } = useGlobals();

  useEffect(() => {
    let newTotal = 0
    cart.forEach((product) => {
      newTotal = newTotal + product.price * product.amount;
    })

    setTotal(newTotal);
  },[cart])

  return (
    <Container>
      <ProductTable>
        <thread>
          <tr>
            <th>PRODUTOS</th>
          </tr>
        </thread>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title} />
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{formatPrice(product.price)}</span>
              </td>
              <td>
              <div style={{ diplay: 'flex', flexDirection: 'column', marginBottom: '22px'}}>
                  <h1 style={{ fontSize: '1rem', marginBottom: '4px'}}>Prioridade</h1>
                  <div>
                    <button type="button" onClick={() => decrementPriority(product.id)}>
                      <MdRemoveCircleOutline size={20} color="#436461" />
                    </button>
                    <input type="number" readOnly value={product.priority} />
                    <button type="button" onClick={() => incrementPriority(product.id)}>
                      <MdAddCircleOutline size={20} color="#436461" />
                    </button>
                  </div>
                </div>
              </td>
              <td>
              <div style={{ diplay: 'flex', flexDirection: 'column', marginBottom: '22px'}}>
                  <h1 style={{ fontSize: '1rem', marginBottom: '4px'}}>Quantidade</h1>
                  <div>
                    <button type="button" onClick={() => removeQntFromCart(product.id)}>
                      <MdRemoveCircleOutline size={20} color="#436461" />
                    </button>
                    <input type="number" readOnly value={product.amount} />
                    <button type="button" onClick={() => addToCart(product.id)}>
                      <MdAddCircleOutline size={20} color="#436461" />
                    </button>
                  </div>
                </div>
              </td>
              <td>
                <strong>{formatPrice(product.price * product.amount)}</strong>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => removeItemFromCart(product.id)}
                >
                  <MdDelete size={20} color="#436461" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <div>
          <h1 style={{ fontSize: '1rem'}}>Valor na carteira em R$</h1>
          <input
            type="number"
            style={{ height: '35px'}}
            onChange={(e) => setWallet(e.target.value)}
            />
        </div>
        <button type="button"> Otimizar pedido</button>
        <Total>
          <span> TOTAL</span>
          <strong>{formatPrice(total)}</strong>
        </Total>
      </footer>
    </Container>
  )
}

export default Cart;
