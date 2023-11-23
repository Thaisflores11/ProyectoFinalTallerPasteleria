import React from 'react';
import '../styles/pastel.css';

import imagenPastel from "/public/PastelTresLeches.png";
const Pastel = () => {
  return (
    <div className='imagenPastel'>
      <h1 className='precio'>Bs. 90</h1>
      <img src={imagenPastel} alt="Pastel Tres Leches" />
    </div>
  );
};


export default Pastel;
