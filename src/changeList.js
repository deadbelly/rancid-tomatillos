const changeList = {
  filterMovies(movies, searchQuery) {
    return movies.filter(movie => {
      const title = movie.title.toLowerCase()
      const search = searchQuery.toLowerCase()
      return title.includes(search)
    })
  }
}

export default changeList