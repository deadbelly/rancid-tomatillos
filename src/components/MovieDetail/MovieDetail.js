import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({movie}) => {
  return (
    <section>
      <div className='detail-page-header'>
        <h2>{movie.title}</h2>
        <p>Genres: {movie.genres.map(genre => genre.name)}</p>
      </div>
      <div className='movie-info'>
        <img src={movie.poster_path} />
        <article>
          <p>{movie.tagline}</p>
          <p>{movie.overview}</p>
        </article>
        <article>
          <p>Runtime: {movie.runtime} minutes</p>
          <p>Budget: ${movie.budget}</p>
          <p>Revenue: ${movie.revenue}</p>
        </article>
      </div>
    </section>
  )
}

export default MovieDetail;