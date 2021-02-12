import React from 'react';
import '../scss/Header.scss';
import { Link } from 'react-router-dom';

const Header = ({searchQuery, updateQuery, sort, updateSort}) => {
  return (
    <header>
      <h1>Rancid
        <img className='icon' src='./tomatillo.png' alt='green tomato icon'/>
        Tomatillos
      </h1>
      <input
        type='text'
        placeholder='Search Movies By Title'
        aria-label='Search Movies By Title'
        value={searchQuery}
        onChange={ event => updateQuery(event.target.value) }
      />
      <label>Sort movies by...</label>
      <select value={sort} onChange={event => updateSort(event.target.value)}>
        <option value='average_rating'>Freshness</option>
        <option value='release_date'>Date</option>
        <option value='title'>Title</option>
      </select>
      <Link to='/'>
        <button>HOME</button>
      </Link>
    </header>
  );
}

export default Header;
