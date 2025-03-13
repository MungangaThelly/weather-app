import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      <div className="spinner"></div>
      <p>Laddar...</p>
    </div>
  );
};

export default Loader;