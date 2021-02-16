import React from 'react';
import YouTube from 'react-youtube';

const MovieDetail = ({movie, videos}) => {
  const date = new Date(movie.release_date).toDateString();

  const genres = movie.genres.join(' ');

  const opts = {
    height: '350',
    width: '390',
  }

  return (
    <section>
      <article className='movie-spec movie-container' tabIndex='0'>
        <h2 className={movie.title.length >= 20 ? 'long-movie-title' : 'movie-title'}>{movie.title}</h2>
        <img className='backdrop-img' src={movie.backdrop_path} />
        <h3>{movie.tagline}</h3>
        <p className='overview'>{movie.overview}</p>
      </article>
      <article className='movie-info movie-container' tabIndex='0'>
        <h2>Stats</h2>
        <div className='movie-stats'>
          <p><b>Freshness:</b> {movie.average_rating.toFixed(2)*10}%</p>
          <p><b>Release Date:</b> {date}</p>
          <p><b>Genres:</b> {genres}</p>
          <p><b>Runtime:</b> {movie.runtime} minutes</p>
          <p><b>Budget:</b> ${new Intl.NumberFormat().format(movie.budget)}</p>
          <p><b>Revenue:</b> ${new Intl.NumberFormat().format(movie.revenue)}</p>
        </div>
        <h2>Trailers & Clips</h2>
        <div className='trailer-container movie-container' tabIndex='0'>
          {videos.length &&
            videos.map(video => <YouTube videoId={video.key} opts={opts} key={video.id}/> )}
        </div>
      </article>
    </section>
  );
}

export default MovieDetail;
