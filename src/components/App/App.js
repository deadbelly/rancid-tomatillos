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
      movies: [],
      selectedId: 0
    };
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({movies: data.movies}))
  }

  selectMovie = id => {
    //fetch movie from api with id, then assign that data to state.selected
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
