import React from 'react';
import { useState } from 'react';
import Welcome from './vistas/VistaWelcome';
import VistaHome from './vistas/VistaHome';  

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <VistaHome /> 
    </>
  );
}

export default App;

