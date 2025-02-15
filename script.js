const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#searchInput");
const movieContainer = document.querySelector("#movieContainer");

searchButton.addEventListener("click", () => {
  const searchInputValue = searchInput.value;
  getMovie(searchInputValue);
});

async function getMovie(searchInputValue) {
  try {
    movieContainer.innerHTML = ``;
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=39754966&s=${searchInputValue}`
    );
    const data = await response.json();
    console.log(data);

    if (data.Response === "True") {
      data.Search.forEach((element) => {
        movieContainer.insertAdjacentHTML(
          "beforeend",
          `<a target="_blank" href="https://www.imdb.com/title/${element.imdbID}/" class="movie-card">
             <img src="${element.Poster}" alt="${element.Title}">
             <h3>${element.Title}</h3>
           </a>`
        );
      });
    } else {
      movieContainer.innerHTML = `<p>Movie not found.</p>`;
    }
  } catch (error) {
    movieContainer.innerHTML = `<p>Error fetching movie data.</p>`;
  }
}
