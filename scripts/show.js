const data = require('./data')
const { showOneMovie } = require('./templates')


function init() {

  const queryString = window.location.search
  .slice(1)
  .split('&')
  .map(ele => ele.split('='))
  .reduce((acc, ele) => ({ ...acc, [ele[0]]: ele[1] }), {})
  
  const movieOnPage = document.querySelector('.movie-content')

  data.getMovie(queryString.id)
  .then( (response) => {
    movieOnPage.innerHTML = showOneMovie(response.data.data)
  })
  .catch( (error) => {
    movieOnPage.innerHTML = error
  })
}

module.exports = { init }