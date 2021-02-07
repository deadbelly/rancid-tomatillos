import React from 'react';
import './Header.css'

const Header = ({selectedDetails, clearSelection}) => {
  return (
    <header>
      {selectedDetails && <button onClick={clearSelection}>HOME</button>}
      <h1>Rancid<img className='icon' src='./tomatillo.png'/>Tomatillos</h1>
    </header>
  );
}

export default Header;
