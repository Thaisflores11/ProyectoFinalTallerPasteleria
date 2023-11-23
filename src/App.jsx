import React from 'react';
import { useState } from 'react';
import Welcome from './vistas/VistaWelcome';
import VistaHome from './vistas/VistaHome';  
<<<<<<< HEAD
import VistaMenu from './vistas/VistaMenu';  
import VistaMenu2 from './vistas/VistaMenu2'; 
import VistaTienda from './vistas/VistaTienda';  
=======
import './App.css'
import Encabezado from './componentes/moleculas/Encabezado'
>>>>>>> 49671caddd4debb88f72057bafcc736a524f6e6d

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
<<<<<<< HEAD
      <VistaHome />
      <VistaMenu /> 
      <VistaMenu2 />
      <VistaTienda />
      
      
      
=======
      <VistaHome /> 
  
>>>>>>> 49671caddd4debb88f72057bafcc736a524f6e6d
    </>
  );
}

export default App;

