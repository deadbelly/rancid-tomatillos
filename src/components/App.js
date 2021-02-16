import React from 'react';
import Header from './Header';
import MovieList from './MovieList';
import MovieDetailContainer from './MovieDetailContainer';
import Loader from './Loader';
import Error from './Error';
import fetchRequests from '../fetchRequests';
import { trackPromise } from 'react-promise-tracker';
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: null,
      searchQuery: '',
      sort: 'average_rating'
    }
  }

  componentDidMount() {
    trackPromise(fetchRequests.getAllMovies()
      .then(data => this.setState({movies: data.movies, selectedDetails: null}))
      .catch(error => this.setState({error: error}))
    );
  }

  updateQuery = (searchBarValue) => {
    this.setState({searchQuery: searchBarValue});
  }

  updateSort = (sortValue) => {
    this.setState({sort: sortValue});
  }

  render() {
    return (
      <div className="App">
        <Header
          searchQuery={this.state.searchQuery}
          updateQuery={this.updateQuery}
          sort={this.state.sort}
          updateSort={this.updateSort}
        />
        <main>
          <Loader />
          {this.state.error && <Error status={this.state.error.status} text={this.state.error.statusText}/>}
          {!!this.state.movies.length &&
            <Route exact path='/' render={ () =>
              <MovieList
                movies={this.state.movies}
                searchQuery={this.state.searchQuery}
                sort={this.state.sort}
              />}
            />
          }
          <Route path='/:id' component={ MovieDetailContainer } />
        </main>
      </div>
    );
  }
}

export default App;
