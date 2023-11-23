import React from 'react';
import '../styles/container.css'
import Numero from './numero';

const Botones = ({ onIncrement, onDecrement }) => {
  return (
    <div className="container">
      <button className='add' onClick={onIncrement}>
        <img src="./public/add.svg" alt="" />
      </button>

      <button className='menos' onClick={onDecrement}>
        <img src="./public/minus.svg" alt="" />
      </button>
      
    </div>
  );
};

export default Botones;
