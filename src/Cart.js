// src/Cart.js
import React from 'react';

// Componente que muestra el carrito de compras
const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Carrito de compras</h2>
      <div style={styles.cartGrid}>
        {cartItems.length === 0 ? (
          <p style={styles.emptyMessage}>Tu carrito está vacío</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <img src={item.imageUrl} alt={item.name} style={styles.cartItemImage} />
              <div style={styles.cartItemDetails}>
                <h3 style={styles.cartItemName}>{item.name}</h3>
                <p style={styles.cartItemPrice}>${item.price}</p>
                <button style={styles.removeButton} onClick={() => removeFromCart(item.id)}>
                  Quitar
                </button>
              </div>
            </div>
          ))
        )}
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
  cartGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    width: '100%',
    maxWidth: '800px',
  },
  emptyMessage: {
    fontSize: '18px',
    color: '#888',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  cartItemImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginRight: '16px',
  },
  cartItemDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  cartItemName: {
    fontSize: '18px',
    marginBottom: '8px',
  },
  cartItemPrice: {
    fontSize: '16px',
    color: '#888',
    marginBottom: '10px',
  },
  removeButton: {
    padding: '6px 12px',
    fontSize: '14px',
    color: '#fff',
    backgroundColor: '#ff4d4f',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Cart;

