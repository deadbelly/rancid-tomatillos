import React from 'react';
import Header from '../Header/Header'
import MovieList from '../MovieList/MovieList'
import movieData from '../../Data/movieData'
import MovieDetail from '../MovieDetail/MovieDetail'
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
        <Header 
        selectedId={this.state.selectedId} 
        selectMovie={this.selectMovie}
        />
        <main>
          {this.state.selectedId ? <MovieDetail movie={this.state.movies.find(movie => movie.id === this.state.selectedId)}/> : 
            <MovieList 
              movies={this.state.movies} 
              selectMovie={this.selectMovie}
          />}
        </main>
      </div>
    );
  }
}

export default App;
