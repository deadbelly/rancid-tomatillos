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
      selectedDetails: null
    };
  }

  componentDidMount() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
      .then(data => this.setState({movies: data.movies}))
      .catch()
  }

  selectMovie = id => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(data => this.setState({selectedDetails: data.movie}))
      .catch()
  }

  render() {
    return (
      <div className="App">
        <Header
        selectedDetails={this.state.selectedDetails}
        selectMovie={this.selectMovie}
        />
        <main>
          {this.state.selectedDetails ? <MovieDetail movie={this.state.selectedDetails}/> :
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
