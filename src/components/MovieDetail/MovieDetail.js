import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({movie}) => {
  return (
    <section className='movie-detail-page'>
      <div className='backdrop-img' style={{backgroundImage:`url(${movie.backdrop_path})`}}>
        <article className='movie-spec movie-container border'>
          <div>
            <h2 className='movie-title'>{movie.title}</h2>
            <p>Genres: {movie.genres}</p>
          </div>
          <p>Runtime: {movie.runtime} minutes</p>
          <p>Budget: ${movie.budget}</p>
          <p>Revenue: ${movie.revenue}</p>
        </article>
        <article className='movie-info movie-container border'>
          <h3>{movie.tagline}</h3>
          <p className='overview'>{movie.overview}</p>
        </article>
      </div>
    </section>
  )
}

export default MovieDetail;
