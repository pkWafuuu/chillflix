
const movieWrapper = document.querySelector('.movie-list');
const searchKey = localStorage.getItem("keyword");

async function main(search){
	const movies = await fetch(`https://www.omdbapi.com/?apikey=f5504bbb&s=${search}&plot=full`);
	const moviesData = await movies.json();
	// console.log(moviesData.Search)

movieWrapper.innerHTML = moviesData.Search.slice(0,8).map((movie) => movieHTML(movie)).join("");

}

function browse(event){
	event.preventDefault();
	const keyword = event.target.search.value;
	main(keyword);
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

main(searchKey);