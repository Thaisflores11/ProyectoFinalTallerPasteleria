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
<<<<<<< HEAD

      <Ubicaciones /> 
=======
      <VistaHome /> 
>>>>>>> bda0aca03f2db9da6fb2f9a8376f487ed6bf9923
  
      
    </>
  );
}

export default App;

