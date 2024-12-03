// src/Funcionamiento.js
import React from 'react';

const Funcionamiento = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Funcionamiento de la tienda</h1>
      <p style={styles.description}>
        A continuación, se muestra un video que explica cómo funciona el sistema de la tienda interactiva.
      </p>
      <div style={styles.videoContainer}>
        <video controls style={styles.video}>
          <source src="/documents/Desktop 2024-12-02 11-08-07 p. m..mp4" type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>
      <button style={styles.button} onClick={() => window.history.back()}>
        Regresar
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '20px',
  },
  videoContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  video: {
    width: '80%',
    maxWidth: '600px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Funcionamiento;