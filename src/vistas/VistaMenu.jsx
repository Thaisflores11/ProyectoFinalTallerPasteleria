
import React from "react";
import TarjetaMenu from "../componentes/organismos/TarjetaMenu";
import { menuData } from "../assets/ApiMenu"; 

function VistaMenu() {
  return (
    <>
      <TarjetaMenu data={menuData} />
    </>
  );
}

export default VistaMenu;