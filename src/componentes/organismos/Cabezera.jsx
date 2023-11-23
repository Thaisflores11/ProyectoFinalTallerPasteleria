import React from 'react'
import '../styles/Cabezera.css'
function Cabezera() {
  return (
    <div>
        <img className='logo'
        src=".../logo.png" alt="" />
        <button className='primerboton'>
            <img src=".../campanita.svg" alt="" />
        </button>
        <button className='segundoboton'>
            <img src=".../barritas.png" alt="" />
        </button>
      
    </div>
  )
}

export default Cabezera
