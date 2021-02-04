import React from 'react';
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
          selectMovie = null
        />)}
    </main>
  );
}

export default MovieList;
