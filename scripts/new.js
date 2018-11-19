const data = require ('./data')

function init() {

  const form = document.querySelector('.new-movie')

  form.addEventListener('submit', (event) => {
    event.preventDefault()

    const movie = {
      title: event.target.title.value,
      director: event.target.director.value,
      year: event.target.year.value,
      rating: event.target.rating.value,
      url: event.target.url.value
    }

    data.addMovie(movie)
    .then( ()=> {
      form.innerHTML = '<p>Movie Added!</p>'
    })
    .catch( (error) => {
      form.innerHTML = error
    })
  })
}

module.exports = { init }