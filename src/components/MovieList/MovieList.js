import React from 'react';
import './MovieList.css';
import Poster from '../Poster/Poster';

const MovieList = ({movies, selectMovie}) => {
  return (
    <main>
      {movies.map(movie =>
        <Poster
          key={movie.id}
          id={movie.id}
          title={movie.title}
          rating={movie.average_rating}
          imgSrc={movie.poster_path}
          selectMovie={selectMovie}
        />)}
    </main>
  );
}

export default MovieList;
