// DireccionComponent.jsx
import React from 'react';
import { direcciones } from '../../assets/direcciones';
import '../styles/direcciones.css'; // Archivo de estilos CSS

const DireccionLista = () => {
  return (
    <div className="direccion-container">
      {direcciones.map((direccion, index) => (
        <div key={index} className="direccion-box">
          <h2 id="titulo">{direccion.titulo}</h2>
          <p id="parrafo">{direccion.parrafo}</p>
        </div>
      ))}
    </div>
  );
};

export default DireccionLista;
