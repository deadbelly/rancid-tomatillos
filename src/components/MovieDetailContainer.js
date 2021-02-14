import React from 'react';
import MovieDetail from './MovieDetail';
import Error from './Error';
import fetchRequests from '../fetchRequests';
import { trackPromise } from 'react-promise-tracker';

class MovieDetailContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedDetails: null,
      videos: [],
      error: null,
    }
  }

  componentDidMount() {
   const {id} = this.props.match.params
    trackPromise(
      Promise.all([fetchRequests.getSelectedMovie(id), fetchRequests.getVideos(id)])
       .then(data => {
        this.setState({selectedDetails: data[0].movie})
        this.setState({videos: data[1].videos})
       })
       .catch(error => this.setState({error: error}))
    )
  }

  render() {
    return (
    <>
      {this.state.error && <Error status={this.state.error.status} text={this.state.error.statusText}/>}
      {this.state.selectedDetails && <MovieDetail movie={this.state.selectedDetails} videos={this.state.videos}/>}
    </>
    )
  }
}
 
export default MovieDetailContainer
