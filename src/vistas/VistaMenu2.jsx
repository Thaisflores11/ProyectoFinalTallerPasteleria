import React from "react";
import TarjetaMenu from "../componentes/organismos/TarjetaMenu";
import { menuData2 } from "../assets/ApiMenu"; // Ruta 

function VistaMenu2() {
  return (
    <>
      <TarjetaMenu data={menuData2} />
    </>
  );
}

export default VistaMenu2;