import React from 'react'
import { Hay } from "../../assets/ApiRecomendacion";
function TarjetainferiorHome() {
  return (
    <div>
        <div className="tarjeta-container">
        {Hay.map((recomendacion, index) => (
          <Hay
            key={index}
            title={Hay.title}
            imgUrl={Hay.imgUrl}
            precio={Hay.precio}
          />
        ))}
      </div>
      
    </div>
  )
}

export default TarjetainferiorHome
