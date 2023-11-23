import React from 'react';
import { useState } from 'react';
import Welcome from './vistas/VistaWelcome';
import VistaHome from './vistas/VistaHome';  
import './App.css'
import Encabezado from './componentes/moleculas/Encabezado'

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Encabezado /> 
  
    </>
  );
}

export default App;

