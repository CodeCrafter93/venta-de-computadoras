import React from 'react';

const Menu = () => {
  const menuStyle = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const sectionStyle = {
    marginBottom: '20px',
  };

  return (
    <div style={menuStyle}>
      <h2>Menú del proyecto</h2>
      <div style={sectionStyle}>
        <h3>Actividades realizadas</h3>
        <p>Detalles de las actividades realizadas a lo largo del curso.</p>
      </div>
      <div style={sectionStyle}>
        <h3>Sistema implementado</h3>
        <p>Información sobre el sistema final desarrollado.</p>
      </div>
      <div style={sectionStyle}>
        <h3>Código fuente</h3>
        <a href="ruta-del-archivo.zip" download>Código fuente (descargar)</a>
      </div>
      <div style={sectionStyle}>
        <h3>Reporte de modificaciones</h3>
        <p>Enlace al reporte con todas las modificaciones realizadas.</p>
      </div>
    </div>
  );
};

export default Menu;
