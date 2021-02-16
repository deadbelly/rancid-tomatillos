import React from 'react';
import { Link } from 'react-router-dom';

const Poster = ({id, title, rating, imgSrc}) => {
  return (
    <Link  className='poster' to={`/${id}`}>
      <img className="poster-img" src={imgSrc} alt={title}/>
      <div>
        <p>Freshness: {rating.toFixed(2)*10}%</p>
        <h2 className={title.length > 25 ? 'long-title' : ''}>{title}</h2>
      </div>
    </Link>
  );
}

export default Poster;
