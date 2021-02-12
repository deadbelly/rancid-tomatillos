import React from 'react';
import '../scss/MovieList.scss';
import Poster from './Poster';

const MovieList = ({movies}) => {
  return (
    <div className='poster-grid'>
      {movies.map(movie =>
        <Poster
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.average_rating}
          imgSrc={movie.poster_path}
        />)}
    </div>
  );
}

export default MovieList;