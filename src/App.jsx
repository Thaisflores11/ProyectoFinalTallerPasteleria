import React from 'react';
import { useState } from 'react';
import Welcome from './vistas/VistaWelcome';
import VistaHome from './vistas/VistaHome';  
import './App.css';
import Encabezado from './componentes/moleculas/Encabezado';
import BarraNavegacionInferior from './vistas/navegInf';
import Ubicaciones from './componentes/organismos/ubicaciones';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <Ubicaciones /> 
  
      
    </>
  );
}

export default App;

