function movieInTable( { id, title, director, year, rating }) {
  return (
    `<tr>
      <th scope="row">
      <a class="movie-title "href="./show.html?id=${id}">${title} </a>
      </th>
      <td>${director}</td>
      <td>${year}</td>
      <td>${rating}</td>
      <td>
      <button type="button" class="btn btn-secondary delete" data-id=${id}>Delete Movie</button>
      </td>
      <td>
      <a href="./edit.html?id=${id}" type="button" class="btn btn-secondary edit">Edit Movie</a>
      </td>
    </tr>`
  )
}

function showOneMovie({ title, director, year, rating, url }) {
  return (
    `<h1>${title}</h1>
    <img src="${url}" alt="${title}">
    <p>Title: ${title}</p>
    <p>Director: ${director}</p>
    <p>Year: ${year}</p>
    <p>My Rating: ${rating}</p>
    <hr>`
  )
}

module.exports = { movieInTable, showOneMovie }