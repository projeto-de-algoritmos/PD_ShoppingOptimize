import React, {
  createContext,
  useContext,
  useState,
} from 'react';


const GlobalsContext = createContext({});

const GlobalsProvider= ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    {
      "id": 1,
      "amount": 3,
      "title": "Tênis de Caminhada Leve Confortável",
      "price": 179.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
    },
    {
      "id": 2,
      "amount": 5,
      "title": "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
      "price": 139.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
    },
    {
      "id": 3,
      "amount": 2,
      "title": "Tênis Adidas Duramo Lite 2.0",
      "price": 219.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg"
    },
    {
      "id": 5,
      "amount": 1,
      "title": "Tênis VR Caminhada Confortável Detalhes Couro Masculino",
      "price": 139.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg"
    },
    {
      "id": 6,
      "amount": 5,
      "title": "Tênis Adidas Duramo Lite 2.0",
      "price": 219.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg"
    },
    {
      "id": 4,
      "amount": 10,
      "title": "Tênis de Caminhada Leve Confortável",
      "price": 179.9,
      "image": "https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg"
    }
  ]);

  const addToCart = (id) => {
    const newItem = cart.find((item) => item.id === id);

    const product = products.find((item) => item.id === id);

    if (!newItem) {
     return setCart(state => [...state, { ...product, amount: 1, priority: 1}]);
    };

    if (newItem.amount + 1 > product.amount) {
      return console.log('produto fora de estoque');
    }

    return setCart(state => {
      return state.map((item) => item.id === id ? {...item, amount: item.amount + 1} : item );
    });
  }

  const removeQntFromCart = (id) => {
    const newItem = cart.find((item) => item.id === id);

    if (!newItem) return;

    if (newItem.amount === 1) {
      return setCart(state => state.filter((item) => item.id !== id));
    }

    return setCart(state => {
      return state.map((item) => item.id === id ? {...item, amount: item.amount - 1} : item );
    });
  }

  const removeItemFromCart = (id) => {
    return setCart((state) => state.filter((product) => product.id !== id));
  }

  const incrementPriority = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem.priority === 10) return

    return setCart(state => {
      return state.map((item) => item.id === id ? {...item, priority: item.priority + 1} : item );
    });
  }

  const decrementPriority = (id) => {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem.priority === 1) return

    return setCart(state => {
      return state.map((item) => item.id === id ? {...item, priority: item.priority - 1} : item );
    });
  }

  return (
    <GlobalsContext.Provider
      value={{
        cart,
        products,
        addToCart,
        removeQntFromCart,
        removeItemFromCart,
        incrementPriority,
        decrementPriority
      }}
    >
      {children}
    </GlobalsContext.Provider>
  );
};

function useGlobals() {
  const context = useContext(GlobalsContext);

  if (!context) {
    throw new Error('useGlobals must be used within a GlobalsProvider');
  }

  return context;
}

export { GlobalsProvider, useGlobals };
