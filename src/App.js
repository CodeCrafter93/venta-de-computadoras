import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Monitor', price: 300 },
    // Agrega más productos según sea necesario
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Productos</Link>
          <Link to="/cart">Carrito</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

