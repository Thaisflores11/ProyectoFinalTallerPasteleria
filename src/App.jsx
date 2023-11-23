import React from 'react';

import Welcome from './vistas/VistaWelcome';
import VistaHome from './vistas/VistaHome';  
import './App.css';
import Encabezado from './componentes/moleculas/Encabezado';
import BarraNavegacionInferior from './componentes/organismos/barraNavegacion'

import Ubicaciones from './componentes/organismos/ubicaciones'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <VistaHome /> 
      
  
      
    </>
  );
}

export default App;

