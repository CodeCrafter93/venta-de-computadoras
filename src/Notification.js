import React from 'react';

const Notification = ({ message }) => {
  return (
    <div style={styles.container}>
      {message}
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: '10px',
    right: '10px',
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
  },
};

export default Notification;