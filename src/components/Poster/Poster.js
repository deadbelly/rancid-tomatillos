import React from 'react';
import './Poster.css';
import { Link } from 'react-router-dom';

const Poster = ({id, title, rating, imgSrc, selectMovie}) => {
  return (
    // <div className="poster" tabIndex='0' onClick={() => selectMovie(id)}>
    <Link  className='poster' to={`/${id}`} onClick={() => selectMovie(id)}>
      <img className="poster-img" src={imgSrc}/>
      <div>
        <p>Freshness: {rating.toFixed(2)*10}%</p>
        <h2 className={title.length > 25 ? 'long-title' : ''}>{title}</h2>
      </div>
    </Link>
    // </div>
  )
}

export default Poster;
