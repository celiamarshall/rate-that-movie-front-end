const data = require('./data')
const { movieInTable } = require('./templates')

function init() {
  showAllMovies()
}

function showAllMovies() {
  data.getMovies()
    .then((response) => {
      const movieHTML = response.data.data.map(movie => {
        return movieInTable(movie)
      })
      document.querySelector('tbody').innerHTML = movieHTML.join('')
      addDeleteListeners()
    })

}

function addDeleteListeners() {

  const deleteButtons = document.querySelectorAll('.delete')

  for (button of deleteButtons) {
    button.addEventListener('click', (event) => {
      data.deleteMovie(event.target.getAttribute('data-id'))
        .then(() => {
          showAllMovies()
        })
    })
  }
}


module.exports = { init }