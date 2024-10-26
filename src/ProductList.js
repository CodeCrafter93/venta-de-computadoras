// src/ProductList.js
import React from 'react';

// Componente que muestra una lista de productos
const ProductList = () => {
  const products = [
    { id: 1, name: 'Computadora gamer', price: 1500, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Laptop para trabajo', price: 1200, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Computadora All-in-one', price: 1000, imageUrl: 'https://via.placeholder.com/150' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Productos disponibles</h2>
      <div style={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.imageUrl} alt={product.name} style={styles.productImage} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productPrice}>${product.price}</p>
            <button style={styles.buyButton}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Estilos CSS en línea
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    width: '100%',
    maxWidth: '800px',
  },
  productCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
  },
  productImage: {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  productName: {
    fontSize: '18px',
    marginBottom: '8px',
  },
  productPrice: {
    fontSize: '16px',
    color: '#888',
    marginBottom: '10px',
  },
  buyButton: {
    padding: '8px 16px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
};

export default ProductList;
