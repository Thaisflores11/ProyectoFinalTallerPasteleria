// Botones.js
import React from 'react';

const Botones = ({ onIncrement, onDecrement }) => {
  return (
    <div className="container">
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export default Botones;
