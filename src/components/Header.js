import React from 'react';
import '../scss/Header.scss';
import { Link } from 'react-router-dom';

const Header = ({searchQuery, updateQuery}) => {
  return (
    <header>
      <h1>Rancid
        <img className='icon' src='./tomatillo.png' alt='green tomato icon'/>
        Tomatillos
      </h1>
      <input 
        type='text' 
        placeholder='Search Movies By Name' 
        aria-label='Search Movies By Name'
        value={searchQuery}
        onChange={ event => updateQuery(event.target.value) }
      />
      <Link to='/'>
        <button>HOME</button>
      </Link>
    </header>
  );
}

export default Header;
