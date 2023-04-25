
const movieWrapper = document.querySelector('.movie-list');

async function main(){
	const movies = await fetch("https://www.omdbapi.com/?apikey=f5504bbb&s=horror");
	const moviesData = await movies.json();
	console.log(moviesData.Search)

	if(document.URL.includes("index.html")) {
		return movieWrapper.innerHTML = moviesData.Search.slice(0,4).map((movie) => movieHTML(movie)).join("");
	}

}

function movieHTML(movie) {
	return `
	<div class="movie">
				<figure class="movie__img--wrapper">
					<img class="movie__img" src="${movie.Poster}" alt="">
				</figure>
				<div class="movie__title">
					${movie.Title}
				</div>
				<div class="movie__year">
					${movie.Year}
				</div>
	</div>
	`;
}

function navHTML() {
	
}

main();