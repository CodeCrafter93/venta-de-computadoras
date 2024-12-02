import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';
import Notification from './Notification';
import Actividades from './Actividades';  // Asegúrate de importar el componente
import CodigoFuente from './CodigoFuente';            // Si tienes este componente
import Reporte from './Reporte';          // Si tienes este componente

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div>
        <header style={styles.header}>
          <h1 style={styles.title}>TecnoPC</h1>
          <div className="hamburger-menu" onClick={toggleMenu} style={styles.hamburgerIcon}>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
            <div style={styles.bar}></div>
          </div>
          <nav style={isMenuOpen ? styles.menuOpen : styles.menuClosed}>
            <Link to="/cart" style={styles.cartLink}>Carrito ({cartItems.length})</Link>
            <div style={styles.menu}>
              <Link to="/actividades" style={styles.menuLink}>Actividades realizadas en el curso</Link>
              <Link to="/codigofuente" style={styles.menuLink}>Código fuente (comprimido)</Link>
              <Link to="/reporte" style={styles.menuLink}>Reporte de las modificaciones realizadas</Link>
            </div>
          </nav>
        </header>

        {notification && <Notification message={notification} />}

        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} clearCart={clearCart} />} />

          {/* Rutas actualizadas con los componentes correspondientes */}
          <Route path="/actividades" element={<Actividades />} />  {/* Ahora redirige a Actividades */}
          <Route path="/codigofuente" element={<CodigoFuente />} />            {/* Ruta para el código fuente */}
          <Route path="/reporte" element={<Reporte />} />          {/* Ruta para el reporte */}
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
  },
  hamburgerIcon: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '30px',
    height: '24px',
    cursor: 'pointer',
    padding: '5px',
  },
  bar: {
    width: '100%',
    height: '4px',
    backgroundColor: '#61dafb',
    borderRadius: '2px',
  },
  menuOpen: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '60px',
    left: '0',
    backgroundColor: '#282c34',
    width: '100%',
    padding: '20px',
    zIndex: '1000',
  },
  menuClosed: {
    display: 'none',
  },
  menu: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
  },
  menuLink: {
    color: '#61dafb',
    textDecoration: 'none',
    fontSize: '16px',
    marginBottom: '8px',
  },
};

export default App;