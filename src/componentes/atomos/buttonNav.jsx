import React from 'react';
import BarrasThreeImage from '/public/BarrasThree.svg';
import '../styles/buttonNav.css';

function ButtonNav() {
  return (
    <div>
      <button className='botonNav'>
        <img src={BarrasThreeImage} alt="" />
      </button>
    </div>
  );
}

export default ButtonNav;
