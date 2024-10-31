// src/Checkout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, clearCart }) => {
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleConfirmPurchase = () => {
    alert("¡Compra confirmada! Gracias por su compra");
    clearCart(); // Vacía el carrito
    navigate("/"); // Redirige al inicio
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Resumen de compra</h2>
      <div style={styles.itemList}>
        {cartItems.map((item) => (
          <div key={item.id} style={styles.item}>
            <p style={styles.itemName}>{item.name}</p>
            <p style={styles.itemPrice}>${item.price}</p>
          </div>
        ))}
      </div>
      <p style={styles.total}>Total: ${total}</p>
      <button onClick={handleConfirmPurchase} style={styles.confirmButton}>
        Confirmar compra
      </button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  itemList: {
    marginBottom: '20px',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
  },
  itemName: {
    fontSize: '18px',
  },
  itemPrice: {
    fontSize: '18px',
    color: '#555',
  },
  total: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  confirmButton: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Checkout;
