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
      <Link to='/'>
        <button>HOME</button>
      </Link>
      <form>
        <input
          type='text'
          placeholder='Search Movies By Title'
          aria-label='Search Movies By Title'
          value={searchQuery}
          onChange={ event => updateQuery(event.target.value) }
        />
        <div className='sort'>
          <label htmlFor='sort-options'>Sort movies by </label>
          <select name='sort-options' value={sort} onChange={event => updateSort(event.target.value)}>
            <option value='average_rating'>Freshness</option>
            <option value='release_date'>Date</option>
            <option value='title'>Title</option>
          </select>
        </div>
      </form>
    </header>
  );
}

export default Header;
