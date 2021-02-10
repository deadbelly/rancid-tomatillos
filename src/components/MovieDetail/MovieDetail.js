import React from 'react';
import '../../scss/MovieDetail.scss';

const MovieDetail = ({movie}) => {
  const date = new Date(movie.release_date).toDateString();

  const genres = movie.genres.join(' ');
  
  return (
    <section className='movie-detail-page'>
      <div className='backdrop-img' style={{backgroundImage:`url(${movie.backdrop_path})`}}>
        <article className='movie-spec movie-container border' tabIndex='0'>
          <h2 className={movie.title.length >= 20 ? 'long-movie-title' : 'movie-title'}>{movie.title}</h2>
          <p><b>Release Date:</b> {date}</p>
          <p><b>Genres:</b> {genres}</p>
          <p><b>Runtime:</b> {movie.runtime} minutes</p>
          <p><b>Budget:</b> ${new Intl.NumberFormat().format(movie.budget)}</p>
          <p><b>Revenue:</b> ${new Intl.NumberFormat().format(movie.revenue)}</p>
        </article>
        <article className='movie-info movie-container border' tabIndex='0'>
          <h3>{movie.tagline}</h3>
          <p className='overview'>{movie.overview}</p>
          <p><b>Freshness:</b> {movie.average_rating.toFixed(2)*10}%</p>
        </article>
      </div>
    </section>
  )
}

export default MovieDetail;
