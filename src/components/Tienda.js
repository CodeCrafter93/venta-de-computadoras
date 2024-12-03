import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';
import Notification from './Notification';

const Tienda = () => {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState('');
  const [currentView, setCurrentView] = useState('productList'); // Estado para alternar vistas

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setNotification(`"${product.name}" se ha añadido al carrito.`);
    setTimeout(() => setNotification(''), 3000);
  };

  const removeFromCart = (productId) => {
    const removedItem = cartItems.find((item) => item.id === productId);
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    setNotification(`"${removedItem?.name}" se ha eliminado del carrito.`);
    setTimeout(() => setNotification(''), 3000);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const renderView = () => {
    switch (currentView) {
      case 'cart':
        return (
          <Cart
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            setCurrentView={setCurrentView}
          />
        );
      case 'checkout':
        return (
          <Checkout
            cartItems={cartItems}
            clearCart={clearCart}
            setCurrentView={setCurrentView}
          />
        );
      default:
        return <ProductList addToCart={addToCart} />;
    }
  };

  return (
    <div>
      <header style={styles.header}>
        <h1 style={styles.title}>TecnoPC</h1>
        <button style={styles.navButton} onClick={() => setCurrentView('cart')}>
          Carrito ({cartItems.length})
        </button>
      </header>

      {notification && <Notification message={notification} />}

      {renderView()}
    </div>
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
  navButton: {
    padding: '8px 16px',
    marginLeft: '10px',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#61dafb',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Tienda;
