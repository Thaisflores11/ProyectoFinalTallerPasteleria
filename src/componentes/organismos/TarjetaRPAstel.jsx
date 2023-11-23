import React from 'react';
import Recomendacion from "../moleculas/Recomendacion";
import { recomendaciones } from "../../assets/ApiRecomendacionPastel";

import "../styles/Recomendacion.css";

const TarjetaRPastel = () => {
  return (
    <section className="recomendacion-section">
      <h2>Recomendaciones</h2>
      <div className="tarjeta-container">
        {recomendaciones.map((recomendacion, index) => (
          <Recomendacion
            key={index}
            title={recomendacion.title}
            imgUrl={recomendacion.imgUrl}
            precio={recomendacion.precio}
          />
        ))}
      </div>
    </section>
  );
};

export default TarjetaRPastel;
