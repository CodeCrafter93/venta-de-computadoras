import React from 'react';

function Cart({ cart }) {
  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {cart.map((product, index) => (
            <div key={index}>
              <h3>{product.name}</h3>
              <p>Precio: ${product.price}</p>
            </div>
          ))}
          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
