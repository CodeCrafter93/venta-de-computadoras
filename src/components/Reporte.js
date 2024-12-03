// src/Reporte.js
import React from 'react';

const Reporte = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Reporte de las modificaciones realizadas</h2>
      <p style={styles.description}>
        A continuación, puedes descargar el reporte con los detalles de las modificaciones realizadas en el proyecto.
      </p>
      <a
        href="documents/Producto integrador. El final del proceso.docx"
        download
        style={styles.downloadButton}
      >
        Descargar reporte
      </a>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  downloadButton: {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff',
    textDecoration: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Reporte;