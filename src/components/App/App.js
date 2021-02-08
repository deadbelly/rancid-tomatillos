import React from 'react';
import Header from '../Header/Header'
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail'
import Loader from './Loader'
import './App.css';
import fetchRequests from '../../fetchRequests'
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
    trackPromise(fetchRequests.getAllMovies()
      .then(data => this.setState({movies: data.movies, selectedDetails: null}))
      .catch(error => this.setState({error: true}))
    )
  }

  selectMovie = id => {
    this.setState({movies: []})
    trackPromise(
      fetchRequests.getSelectedMovie(id)
      .then(data => this.setState({selectedDetails: data.movie}))
      .catch(error => this.setState({error: true}))
    )
  }

  clearSelection = () => {
    this.setState({selectedDetails: null})
    this.componentDidMount()
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
        <main>
          <Loader />
          {this.chooseContent()}
        </main>
      </div>
    );
  }
}

export default App;
