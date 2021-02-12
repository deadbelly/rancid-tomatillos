import React from 'react';
import '../scss/MovieList.scss';
import Poster from './Poster';
import changeList from '../changeList'

const MovieList = ({movies, searchQuery}) => {

  movies = changeList.filterMovies(movies, searchQuery)

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
