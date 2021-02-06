import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({movie}) => {
  return (
    <section className='movie-detail-page'>
      <div className='backdrop-img' style={{backgroundImage:`url(${movie.backdrop_path})`}}>
        <article className='movie-info border'>
          <div className='detail-page-header'>
            <h2>{movie.title}</h2>
            <p>Genres: {movie.genres}</p>
          </div>
          <h3>{movie.tagline}</h3>
          <p className='overview'>{movie.overview}</p>
        </article>
        <article className='movie-spec border'>
          <p>Runtime: {movie.runtime} minutes</p>
          <p>Budget: ${movie.budget}</p>
          <p>Revenue: ${movie.revenue}</p>
        </article>
      </div>
    </section>
  )
}

export default MovieDetail;
