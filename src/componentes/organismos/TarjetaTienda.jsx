import React from 'react';
import Tienda from "../moleculas/Tienda";
import { tienda } from "../../assets/ApiTienda";

import "../styles/Tienda.css";

const TarjetaTienda = () => {
  return (
    <section className="tienda-section">
      <h2>que mas hay en tienda</h2>
      <div className="tarjeta-tienda">
        {tienda.map((tienda, index) => (
          <Tienda
            key={index}
            title={tienda.title}
            imgUrl={tienda.imgUrl}
            precio={tienda.precio}
            
          />
        ))}
      </div>
    </section>
  );
};

export default TarjetaTienda;