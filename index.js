
const movieWrapper = document.querySelector('.movie-list');

async function main(){
	const movies = await fetch(`https://www.omdbapi.com/?apikey=f5504bbb&s=see&plot=full`);
	const moviesData = await movies.json();
	console.log(moviesData.Search)

	movieWrapper.innerHTML = moviesData.Search.slice(0,4).map((movie) => movieHTML(movie)).join("");
}

function landing__browse(event){
	localStorage.setItem("keyword", event.target.search.value);
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