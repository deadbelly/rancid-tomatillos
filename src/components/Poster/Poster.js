import React from 'react';

const Poster = ({id, title, rating, imgSrc}) => {
  return (
    <div>
      <img src={imgSrc}/>
      <h2>{title}</h2>
      <p>{rating.toFixed(1)}</p>
    </div>
  )
}

export default Poster;
