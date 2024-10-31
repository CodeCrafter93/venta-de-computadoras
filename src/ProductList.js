// src/ProductList.js
import React, { useState } from 'react';

const ProductList = ({ addToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  const products = [
    { id: 1, name: 'Computadora gamer', price: 12500, category: 'computadoras', rating: 4, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Laptop para trabajo', price: 7500, category: 'laptops', rating: 5, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Computadora All-in-one', price: 8000, category: 'computadoras', rating: 3, imageUrl: 'https://via.placeholder.com/150' },
  ];

  const filteredProducts = products
    .filter((product) => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category === 'all' || product.category === category)
    )
    .sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Productos disponibles</h2>

      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchBar}
      />

      <select onChange={(e) => setCategory(e.target.value)} style={styles.filterDropdown}>
        <option value="all">Todas las categorías</option>
        <option value="computadoras">Computadoras</option>
        <option value="laptops">Laptops</option>
      </select>

      <select onChange={(e) => setSortOrder(e.target.value)} style={styles.filterDropdown}>
        <option value="asc">Precio: Menor a mayor</option>
        <option value="desc">Precio: Mayor a menor</option>
      </select>

      <div style={styles.productGrid}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.imageUrl} alt={product.name} style={styles.productImage} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productPrice}>${product.price}</p>
            <div style={styles.rating}>
              {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
            </div>
            <button style={styles.buyButton} onClick={() => {
              console.log("Producto seleccionado:", product);
              addToCart(product);
            }}>
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Estilos
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
  searchBar: {
    padding: '8px',
    fontSize: '16px',
    width: '100%',
    maxWidth: '400px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  filterDropdown: {
    padding: '8px',
    fontSize: '16px',
    marginBottom: '10px',
    marginRight: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
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
  rating: {
    fontSize: '16px',
    color: 'gold',
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
