import React from 'react';

const Header = ({selectedDetails, selectMovie}) => {
  return (
    <header>
      {selectedDetails && <button onClick={() => selectMovie(0)}>HOME</button>}
      <h1>Rancid Tomatillos</h1>
    </header>
  );
}

export default Header;
