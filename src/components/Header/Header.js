import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Rancid<img className='icon' src='./tomatillo.png'/>Tomatillos</h1>
      <Link to='/'>
        <button>HOME</button>
      </Link>
    </header>
  );
}

export default Header;
