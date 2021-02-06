import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({movie}) => {
  return (
    <section>
      <div className='detail-page-header'>
        <h2>{movie.title}</h2>
        <p>Genres: {movie.genres}</p>
      </div>
      <div className='movie-info'>
        <img className='poster-image border' src={movie.backdrop_path} />
        <article className='border'>
          <h3>{movie.tagline}</h3>
          <p className='overview'>{movie.overview}</p>
        </article>
        <article className='border'>
          <p>Runtime: {movie.runtime} minutes</p>
          <p>Budget: ${movie.budget}</p>
          <p>Revenue: ${movie.revenue}</p>
        </article>
      </div>
    </section>
  )
}

export default MovieDetail;
