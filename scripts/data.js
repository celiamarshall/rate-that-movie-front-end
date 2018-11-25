const axios = require('axios')
const BASE_URL = 'https://intense-hamlet-17480.herokuapp.com/movies'

function getMovies() {
  return axios.get(BASE_URL)
}

function getMovie(id) {
  return axios.get(BASE_URL + '/' + id)
}

function addMovie(newPost) {
  return axios.post(BASE_URL, newPost)
}

function editMovie(id, newPost) {
  return axios.put(BASE_URL + '/' + id, newPost)
}

function deleteMovie(id) {
  return axios.delete(BASE_URL + '/' + id)
}

module.exports = { getMovies, getMovie, addMovie, editMovie, deleteMovie }