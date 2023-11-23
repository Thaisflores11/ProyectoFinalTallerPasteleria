import React from 'react';
import { useState } from 'react';
import Welcome from './vistas/VistaWelcome';
import VistaHome from './vistas/VistaHome';  
import VistaMenu from './vistas/VistaMenu';  
import VistaMenu2 from './vistas/VistaMenu2'; 
import VistaTienda from './vistas/VistaTienda';  

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <VistaHome />
      <VistaMenu /> 
      <VistaMenu2 />
      <VistaTienda />
      
      
      
    </>
  );
}

export default App;

