// src/Sistema.js
import React from 'react';
import { Link } from 'react-router-dom';

const Sistema = () => {
  return (
    <div>
      <h2>Sistema implementado</h2>
      <p>Selecciona una opción:</p>
      <ul>
        <li><Link to="/tienda" style={styles.link}>Ir a la tienda</Link></li>
        <li><Link to="/funcionamiento" style={styles.link}>Ver funcionamiento del sistema</Link></li>
      </ul>
    </div>
  );
};

const styles = {
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    fontSize: '18px',
  }
};

export default Sistema;