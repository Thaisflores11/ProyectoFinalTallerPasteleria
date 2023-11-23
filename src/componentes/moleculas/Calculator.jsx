// App.js
import React, { useState } from 'react';
import Numero from '../atomos/numero';
import Botones from '../atomos/botones';
import '../styles/container.css';
import Add from '../atomos/add';

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
      <Botones onIncrement={incrementNumber} onDecrement={decrementNumber}/>
        <Numero number={number} />
      <Add />
      </div>
    </div>
  );
};

export default App;
