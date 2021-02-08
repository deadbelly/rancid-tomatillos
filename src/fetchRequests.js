const fetchRequests = {
  checkResponse(response) {
    if (response.ok) {
      return response.json()
    }
    throw response
  },

  getAllMovies() {
    return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => this.checkResponse(response))
  },

  getSelectedMovie(id) {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => this.checkResponse(response))
  }
}

export default fetchRequests
