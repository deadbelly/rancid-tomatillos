import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Rancid
        <img className='icon' src='./tomatillo.png' alt='green tomato icon'/>
        Tomatillos
      </h1>
      <Link to='/'>
        <button alt='home button'>HOME</button>
      </Link>
    </header>
  );
}

export default Header;
