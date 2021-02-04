import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({movie}) => {
  return (
    <div>
      {[
        movie.id,
        movie.title,
        movie.average_rating,
        movie.poster_path,
        movie.release_date
      ]}
    </div>
  )
}

export default MovieDetail;