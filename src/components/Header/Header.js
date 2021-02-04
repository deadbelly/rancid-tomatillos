import React from 'react';

const Header = ({selectedId, selectMovie}) => {
  return (
    <header>
      {selectedId !== 0 && <button onClick={() => selectMovie(0)}>HOME</button>}
      <h1>Rancid Tomatillos</h1>
    </header>
  );
}

export default Header;
