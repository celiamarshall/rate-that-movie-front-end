const homepage = require ('./homepage')
const show = require('./show')
const newMovie = require('./new') 
const edit = require('./edit')

if (window.location.pathname === '/') {

}

else if (window.location.pathname === '/movies/index.html') {
  homepage.init()
}

else if (window.location.pathname === '/movies/show.html') {
  show.init()
}

else if (window.location.pathname === '/movies/new.html') {
  newMovie.init()
}

else if (window.location.pathname === '/movies/edit.html') {
  edit.init()
}

