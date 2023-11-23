import React from 'react';
import Menu from "../moleculas/Menu";
import { menuData } from "../../assets/ApiMenu";

import "../styles/Menu.css";

const TarjetaMenu = () => {
  return (
    <section className="menu-section">
      <button>Pasteles</button>
      <button>Postres</button>
      <div className="tarjeta-container">
        {menuData.map((menuItem, index) => (
          <Menu
            key={index}
            title={menuItem.title}
            imgUrl={menuItem.imgUrl}
            precio={menuItem.precio}
          />
        ))}
      </div>
    </section>
  );
};

export default TarjetaMenu;