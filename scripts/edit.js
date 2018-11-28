const data = require('./data')

function init() {
  const queryString = window.location.search
  .slice(1)
  .split('&')
  .map(ele => ele.split('='))
  .reduce((acc, ele) => ({ ...acc, [ele[0]]: ele[1] }), {})
  
  const formEdit = document.querySelector('.edit-movie')
  const titleEdit = document.querySelector('#titleEdit')
  const directorEdit = document.querySelector('#directorEdit')
  const yearEdit = document.querySelector('#yearEdit')
  const ratingEdit = document.querySelector('#ratingEdit')
  const urlEdit = document.querySelector('#urlEdit')

  data.getMovie(queryString.id)
  .then( (response) => {
    titleEdit.value = response.data.data.title
    directorEdit.value = response.data.data.director
    yearEdit.value = response.data.data.year
    ratingEdit.value = response.data.data.rating
    urlEdit.value = response.data.data.url
  })
  .catch( (error) => {
    formEdit.innerHTML = error
  })

  formEdit.addEventListener('submit', (event) => {
    event.preventDefault()

    const movie = {
      title: event.target.titleEdit.value,
      director: event.target.directorEdit.value,
      year: event.target.yearEdit.value,
      rating: event.target.ratingEdit.value,
      url: event.target.urlEdit.value
    }

    data.editMovie(queryString.id, movie)
    .then( ()=> {
      formEdit.innerHTML = '<p>Movie Updated!</p>'
    })
    .catch( (error) => {
      formEdit.innerHTML = error
    })
  })
}

module.exports = { init }
