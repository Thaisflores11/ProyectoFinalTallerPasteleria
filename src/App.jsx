import { useState } from 'react'
import Welcome from './vistas/VistaWelcome'
import './App.css'
import Calculator from './componentes/moleculas/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Calculator />
      <Welcome />
    </>
  )
}

export default App
