import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Actividades from './components/Actividades';
import Sistema from './components/Sistema';
import CodigoFuente from './components/CodigoFuente';
import Reporte from './components/Reporte';
import Tienda from './components/Tienda';
import Funcionamiento from './components/Funcionamiento';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/sistema" element={<Sistema />} />
        <Route path="/codigo" element={<CodigoFuente />} />
        <Route path="/reporte" element={<Reporte />} />
        <Route path="/tienda" element={<Tienda />} />
		<Route path="/funcionamiento" element={<Funcionamiento />} />
      </Routes>
    </Router>
  );
};

export default App;