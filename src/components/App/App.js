import React from 'react';
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import MovieDetailContainer from '../MovieDetail/MovieDetailContainer';
import Loader from './Loader';
import Error from '../Error/Error';
import './App.css';
import fetchRequests from '../../fetchRequests';
import { trackPromise } from 'react-promise-tracker';
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: null,
    }
  }

  componentDidMount() {
    trackPromise(fetchRequests.getAllMovies()
      .then(data => this.setState({movies: data.movies, selectedDetails: null}))
      .catch(error => this.setState({error: error}))
    )
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Loader />
          {this.state.error && <Error status={this.state.error.status} text={this.state.error.statusText}/>}
          {!!this.state.movies.length && 
            <Route exact path='/' render={ () => 
              <MovieList movies={this.state.movies} />}
            />
          }
          <Route path='/:id' component={ MovieDetailContainer } />
        </main>
      </div>
    );
  }
}

export default App;
