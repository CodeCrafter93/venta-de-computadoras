// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div>
        <header style={styles.header}>
          <h1 style={styles.title}>TecnoPC</h1>
          <Link to="/cart" style={styles.cartLink}>Carrito ({cartItems.length})</Link>
        </header>

        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} clearCart={clearCart} />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#282c34',
  },
  title: {
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  },
  cartLink: {
    color: '#61dafb',
    textDecoration: 'none',
    fontSize: '18px',
  }
};

export default App;