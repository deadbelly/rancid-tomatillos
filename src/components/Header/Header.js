import React from 'react';
import './Header.css'

const Header = ({selectedDetails, clearSelection}) => {
  return (
    <header>
      <h1>Rancid<img className='icon' src='./tomatillo.png'/>Tomatillos</h1>
      {selectedDetails && <button onClick={clearSelection}>HOME</button>}
    </header>
  );
}

export default Header;
