import React from 'react';
import './Poster.css'

const Poster = ({id, title, rating, imgSrc, selectMovie}) => {
  return (
    <div className="poster" onClick={() => selectMovie(id)}>
      <img src={imgSrc}/>
      <h2>{title}</h2>
      <p>{rating.toFixed(1)}/10 Fresh Tomatillos</p>
    </div>
  )
}

export default Poster;
