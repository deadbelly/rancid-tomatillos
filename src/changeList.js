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
      const convertedDates = movies.map(movie => {
        if (typeof(movie.release_date) === 'string') {
          movie.release_date = parseInt(movie.release_date.split('-').join(''))
        }
        return movie
      })

      return convertedDates.sort((a, b) => {
        return b.release_date - a.release_date
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
