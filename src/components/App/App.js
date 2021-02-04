import React from 'react';
import Header from '../Header/Header'
import MovieLise from '../MovieList/MovieList'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: 0
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MovieList />
      </div>
    );
  }
}

export default App;
