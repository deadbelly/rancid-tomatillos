const changeList = {
  filterMovies(movies, searchQuery) {
    return movies.filter(movie => {
      const title = movie.title.toLowerCase()
      const search = searchQuery.toLowerCase()
      return title.includes(search)
    })
  },

  sortAlgorithm: {
    average_rating(movies) {
      return movies.sort((a, b) => b.average_rating - a.average_rating)
    },

    release_date(movies) {
      return movies.sort((a, b) => {
        const aDate = parseInt(a.release_date.split('-').join(''))
        const bDate = parseInt(b.release_date.split('-').join(''))
        console.log(aDate, bDate)
        return bDate - aDate
      })
    },

    title(movies) {
      return movies.sort((a, b) => b.title - a.title)
    }
  },

  sortMovies(movies, sort) {
    return this.sortAlgorithm[sort](movies)
  }
}

export default changeList
