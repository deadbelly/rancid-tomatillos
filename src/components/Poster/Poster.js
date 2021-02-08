import React from 'react';
import './Poster.css'

const Poster = ({id, title, rating, imgSrc, selectMovie}) => {
  return (
    <div className="poster" tabIndex='0' onClick={() => selectMovie(id)}>
      <img className="poster-img" src={imgSrc}/>
      <div>
        <p>Freshness: {rating.toFixed(2)*10}%</p>
        <h2 className={title.length > 25 ? 'long-title' : ''}>{title}</h2>
      </div>
    </div>
  )
}

export default Poster;
