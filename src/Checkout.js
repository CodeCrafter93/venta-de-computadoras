import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, clearCart }) => {
  const navigate = useNavigate();

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleConfirmPurchase = () => {
    alert("¡Compra confirmada! Gracias por su compra");
    clearCart();
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Resumen de compra</h2>
      {cartItems.length === 0 ? (
        <p style={styles.emptyCart}>El carrito está vacío.</p>
      ) : (
        <div>
          <div style={styles.itemList}>
            {cartItems.map((item) => (
              <div key={item.id} style={styles.item}>
                <p style={styles.itemName}>{item.name}</p>
                <p style={styles.itemPrice}>${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div style={styles.summary}>
            <p style={styles.total}>
              <strong>Total: </strong>${total.toFixed(2)}
            </p>
            <button onClick={handleConfirmPurchase} style={styles.confirmButton}>
              Confirmar compra
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  emptyCart: {
    fontSize: '18px',
    color: '#888',
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
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: '18px',
    color: '#555',
  },
  summary: {
    marginTop: '20px',
    textAlign: 'right',
  },
  total: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  confirmButton: {
    padding: '12px 24px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#28a745',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'background-color 0.3s ease',
  },
  confirmButtonHover: {
    backgroundColor: '#218838',
  },
};

export default Checkout;