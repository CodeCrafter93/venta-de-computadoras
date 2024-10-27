// src/App.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

// Componente principal de la aplicación
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', padding: '20px' }}>TecnoPC</h1>
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;




