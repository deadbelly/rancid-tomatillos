import React from 'react';
import './MovieList.css';
import Poster from '../Poster/Poster';

const MovieList = ({movies}) => {
  return (
    <main>
      {movies.map(movie =>
        <Poster
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.average_rating}
          imgSrc={movie.poster_path}
        />)}
    </main>
  );
}

export default MovieList;
