import React from 'react';
import Header from '../Header/Header'
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail'
import Loader from './Loader'
import Error from '../Error/Error'
import './App.css';
import fetchRequests from '../../fetchRequests'
import { trackPromise } from 'react-promise-tracker';
import { Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedDetails: null,
      error: null,
    };
  }

  componentDidMount() {
    this.loadListData()
  }

  loadListData = () => {
    this.setState({selectedDetails: null})
    trackPromise(fetchRequests.getAllMovies()
      .then(data => this.setState({movies: data.movies, selectedDetails: null}))
      .catch(error => this.setState({error: error}))
    )
  }

  loadSelectionData = id => {
    this.setState({movies: []})
    trackPromise(
      fetchRequests.getSelectedMovie(id)
      .then(data => this.setState({selectedDetails: data.movie}))
      .catch(error => {
        this.setState({error: error})
      })
    )
  }

  chooseContent() {
    if (this.state.error !== null) {
      return <Error status={this.state.error.status} text={this.state.error.statusText}/>
    } else if (this.state.selectedDetails){
      return <MovieDetail movie={this.state.selectedDetails}/>
    } else {
      return <MovieList
        movies={this.state.movies}
        selectMovie={this.loadSelectionData}/>
    }
  }

  render() {
    return (
      <div className="App">
        <Header
        selectedDetails={this.state.selectedDetails}
        clearSelection={this.loadListData}
        />
        <main>
          <Loader />
          {!!this.state.movies.length && 
            <Route path='/' render={ () => <MovieList
            movies={this.state.movies}
            selectMovie={this.loadSelectionData}/>}
            />
          }
          <Route path='/:id' render={ }  />
        </main>
      </div>
    );
  }
}

export default App;
