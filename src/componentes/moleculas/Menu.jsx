import React from 'react';
import "../styles/Menu.css";

const Menu = ({ title, imgUrl, precio }) => {
  return (
    <div className="tarjeta-menu">
      <div className="imagen-tarjeta">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="textos-tarjeta-menu">
        <p className="titulo">{title}</p>
        <p className="precio">{precio}</p>
       </div>
    </div>
  );
};

export default Menu;
