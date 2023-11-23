// App.js
import React, { useState } from 'react';
import Numero from '../atomos/numero';
import Botones from '../atomos/botones';
import '../styles/container.css';

const App = () => {
  const [number, setNumber] = useState(0);

  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div className="app-container">
      <div className="app">
        <Botones onIncrement={incrementNumber} />
        <Numero number={number} />
        <Botones onDecrement={decrementNumber} />
      </div>
    </div>
  );
};

export default App;
