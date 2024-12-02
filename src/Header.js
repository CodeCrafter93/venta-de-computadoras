import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#282c34',
  };

  const linkStyle = {
    color: '#61dafb',
    textDecoration: 'none',
    margin: '0 10px',
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ color: 'white' }}>Tienda TecnoPC</h1>
      <nav>
        <Link to="/" style={linkStyle}>Inicio</Link>
        <Link to="/menu" style={linkStyle}>Menú</Link>
        <Link to="/carrito" style={linkStyle}>Carrito</Link>
      </nav>
    </header>
  );
};

export default Header;