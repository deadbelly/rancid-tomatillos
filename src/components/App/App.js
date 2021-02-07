import React from 'react';
import Header from '../Header/Header'
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail'
import LoadingMessage from '../LoadingMessage'
import './App.css';
import { trackPromise } from 'react-promise-tracker';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedDetails: null,
      error: false,
    };
  }

  componentDidMount() {
    trackPromise(fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {if (response.ok) {return response.json()}})
      .then(data => this.setState({movies: data.movies}))
      .catch(error => this.setState({error: true})))
  }

  selectMovie = id => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => {if (response.ok) {return response.json()}})
      .then(data => this.setState({selectedDetails: data.movie}))
      .catch(error => this.setState({error: true}))
  }

  clearSelection = () => {
    this.setState({selectedDetails: null})
  }

  chooseContent() {
    if (this.state.error) {
      return <h2>Something went wrong!</h2>
    } else if (this.state.selectedDetails){
      return <MovieDetail movie={this.state.selectedDetails}/>
    } else {
      return <MovieList
        movies={this.state.movies}
        selectMovie={this.selectMovie}/>
    }
  }

  render() {
    return (
      <div className="App">
        <Header
        selectedDetails={this.state.selectedDetails}
        clearSelection={this.clearSelection}
        />
        <LoadingMessage />
        <main>
          {this.chooseContent()}
        </main>
      </div>
    );
  }
}

export default App;
