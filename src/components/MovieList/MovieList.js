import React from 'react';
import './MovieList.css';
import Poster from '../Poster/Poster';
import MovieDetail from '../MovieDetail/MovieDetail';

const MovieList = ({movies, selectMovie, movie}) => {
  return (
    <main>
      {movie ? <MovieDetail movie={movie}/> :   
        movies.map(movie =>
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
