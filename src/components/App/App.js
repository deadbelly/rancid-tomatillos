import React from 'react';
import Header from '../Header/Header'
import MovieList from '../MovieList/MovieList'
import movieData from '../../Data/movieData'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
      selectedMovie: 0
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;
