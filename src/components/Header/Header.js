import React from 'react';
import './Header.css'

const Header = ({selectedDetails, clearSelection}) => {
  return (
    <header>
      {selectedDetails && <button onClick={clearSelection}>HOME</button>}
      <h1>Rancid Tomatillos</h1>
    </header>
  );
}

export default Header;
