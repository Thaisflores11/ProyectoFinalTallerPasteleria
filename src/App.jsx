import React from 'react';
import { useState } from 'react';
import Welcome from './vistas/VistaWelcome';
import VistaHome from './vistas/VistaHome';  
import './App.css'


import './App.css';
import Pastel1 from './vistas/Pastel1';
import ButtonNav from './componentes/atomos/buttonNav';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Pastel1 />
      <ButtonNav />
      
  
    </>
  );
}

export default App;

