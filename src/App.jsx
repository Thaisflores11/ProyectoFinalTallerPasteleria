import React from 'react';
import { useState } from 'react';
import Welcome from './vistas/VistaWelcome';
import VistaHome from './vistas/VistaHome';  
import './App.css'
import Encabezado from './componentes/moleculas/Ingredientes'

import './App.css';
import Pastel1 from './vistas/Pastel1';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Pastel1 />
  
    </>
  );
}

export default App;

