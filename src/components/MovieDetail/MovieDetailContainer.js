import React from 'react';
import MovieDetail from './MovieDetail';
import Error from '../Error/Error';
import fetchRequests from '../../fetchRequests';
import { trackPromise } from 'react-promise-tracker';;

class MovieDetailContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDetails: null,
      error: null,
    }
  }

  componentDidMount() {
   const {id} = this.props.match.params
    trackPromise(
      fetchRequests.getSelectedMovie(id)
      .then(data => this.setState({selectedDetails: data.movie}))
      .catch(error => {
        this.setState({error: error})
      })
    )
  }

  render() {
    return (
    <>
      {this.state.error && <Error status={this.state.error.status} text={this.state.error.statusText}/>}
      {this.state.selectedDetails && <MovieDetail movie={this.state.selectedDetails}/>}
    </>
    )
  }
}

export default MovieDetailContainer