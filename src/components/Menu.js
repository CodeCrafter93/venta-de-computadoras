import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">UDG VIRTUAL</h1>
      <h3>Proyecto II - Producto integrador</h3>
	  <h4>Leonardo Gómez del Río</h4>
      <div className="row justify-content-center mt-4">
        <div className="col-md-3">
          <Link to="/actividades" className="btn btn-danger w-100 mb-3">
            Actividades realizadas en el curso
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/sistema" className="btn btn-danger w-100 mb-3">
            Sistema implementado
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/codigo" className="btn btn-danger w-100 mb-3">
            Código fuente
          </Link>
        </div>
        <div className="col-md-3">
          <Link to="/reporte" className="btn btn-danger w-100 mb-3">
            Reporte de modificaciones realizadas
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;