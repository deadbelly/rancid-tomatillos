const changeList = {
  filterMovies(movies, searchQuery) {
    return movies.filter(movie => {
      const title = movie.title.toLowerCase()
      const search = searchQuery.toLowerCase()
      return title.includes(search)
    })
  },

  sortBy: {
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
      return movies.sort((a, b) => {
        return a.title.localeCompare(b.title, {sensitivity: 'base'});
      })
    }
  }
}

export default changeList
