import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({movie}) => {

  const formatDate = (movieReleaseDate) => {
    const date = new Date(movieReleaseDate);
    return date.toDateString();
  };

  const genres = movie.genres.join(' ');

  return (
    <section className='movie-detail-page'>
      <div className='backdrop-img' style={{backgroundImage:`url(${movie.backdrop_path})`}}>
        <article className='movie-spec movie-container border'>
          <h2 className='movie-title'>{movie.title}</h2>
          <p>Release Date: {formatDate(movie.release_date)}</p>
          <p>Genres: {genres}</p>
          <p>Runtime: {movie.runtime} minutes</p>
          <p>Budget: ${new Intl.NumberFormat().format(movie.budget)}</p>
          <p>Revenue: ${new Intl.NumberFormat().format(movie.revenue)}</p>
        </article>
        <article className='movie-info movie-container border'>
          <h3>{movie.tagline}</h3>
          <p className='overview'>{movie.overview}</p>
          <p>{movie.average_rating}/10 {String.fromCodePoint(0x1F345)}</p>
        </article>
      </div>
    </section>
  )
}

export default MovieDetail;
