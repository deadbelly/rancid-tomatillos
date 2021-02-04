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
      selectedId: 0
    };
  }

  selectMovie = id => {
    this.setState({selectedId: id})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MovieList 
          movies={this.state.movies} 
          selectMovie={this.selectMovie}
          selectedId={this.state.selectedId}
        />
      </div>
    );
  }
}

export default App;
