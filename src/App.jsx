import { useState } from 'react'
import Welcome from './vistas/VistaWelcome'
import BarraNavegacionInferior from './componentes/organismos/barraNavegacion'
import './App.css'
import Ubicaciones from './componentes/organismos/ubicaciones'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Welcome />
      
      <Ubicaciones />
      <BarraNavegacionInferior />
    </>
  )
}

export default App
