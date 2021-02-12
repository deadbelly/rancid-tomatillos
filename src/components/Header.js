import React from 'react';
import '../scss/Header.scss';
import { Link } from 'react-router-dom';

const Header = ({searchQuery, updateQuery, sort}) => {
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
      <label>Sort movies by...</label>
      <select value={sort}>
        <option value='freshness'>Freshness</option>
        <option value='date'>Date</option>
        <option value='name'>Name</option>
      </select>
      <Link to='/'>
        <button>HOME</button>
      </Link>
    </header>
  );
}

export default Header;
