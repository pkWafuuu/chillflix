
const movieWrapper = document.querySelector('.movie-list');

async function main(){
	const movies = await fetch("https://www.omdbapi.com/?apikey=f5504bbb&s=drama");
	const moviesData = await movies.json();
	// console.log(moviesData.Search[0]);

	movieWrapper.innerHTML = moviesData.Search.map((movie) => {
		return `
			<div class="movie">
				<figure class="movie__img--wrapper">
					<img class="move__img" src="${movie.Poster}" alt="">
				</figure>
				<div class="movie__title">
					${movie.Title}
				</div>
			</div>`
	}).join("");

}

main();