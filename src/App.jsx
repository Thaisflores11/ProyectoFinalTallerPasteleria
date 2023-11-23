import { useState } from 'react'
import Welcome from './vistas/VistaWelcome'
import './App.css'
import Encabezado from './componentes/organismos/Encabezado'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Encabezado />
      <Welcome />
  
      
     
      
    </>
  )
}

export default App
