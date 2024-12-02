import React from 'react';

const CodigoFuente = () => (
  <div>
    <h2>Código fuente</h2>
    <p>
      Aquí puedes acceder al código fuente del proyecto completo por medio de GitHub. También puedes descargar el código fuente comprimido:
    </p>
    <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
      <button 
        style={{
          padding: '10px 20px',
          backgroundColor: '#61dafb',
          border: 'none',
          borderRadius: '5px',
          color: 'white',
          cursor: 'pointer',
          fontSize: '16px',
        }}
        onClick={() => window.open('https://github.com/CodeCrafter93/venta-de-computadoras', '_blank')}
      >
        Ver en GitHub
      </button>
      <button 
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          border: 'none',
          borderRadius: '5px',
          color: 'white',
          cursor: 'pointer',
          fontSize: '16px',
        }}
        onClick={() => window.open('https://drive.google.com/file/d/1ZBdw-0S9Lis6zYZkPtFrpAsB5NZDoSAD/view?usp=sharing', '_blank')}
      >
        Descargar código fuente
      </button>
    </div>
  </div>
);

export default CodigoFuente;