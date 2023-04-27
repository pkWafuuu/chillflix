
const movieWrapper = document.querySelector('.movie-list');
const searchKey = localStorage.getItem("keyword");
const type = "series";

async function main(search, type){

	const movies = await fetch(`https://www.omdbapi.com/?apikey=f5504bbb&s=${search}&type=${type}`);
	const moviesData = await movies.json();

	if(search === null) {
		movieWrapper.innerHTML = browseErrorHTML(null);
	}
	else if(moviesData.Response == 'False'){
		movieWrapper.innerHTML = browseErrorHTML(moviesData.Error, search);
	}
	else {
		movieWrapper.innerHTML = moviesData.Search.slice(0,8).map((movie) => movieHTML(movie)).join("");
	}

}


function browse(event){
	event.preventDefault();
	const keyword = event.target.search.value;
	const type = event.target.type.value;
	main(keyword, type);
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

function browseErrorHTML(error, search){
	if (error === null) {
		return `
			<div class="browse__empty">
				<figure class="browse__img--wrapper">
					<img src="./assets/browse.svg" alt="" class="browse__img">
				</figure>
				<h1 class="browse__text">Search For Movies, ex. Title, keywords</h1>
			</div>
	`
	}
	return `
			
			<div class="browse__empty">
				<figure class="browse__img--wrapper">
					<img src="./assets/browse.svg" alt="" class="browse__img">
				</figure>
				<h1 class="browse__text">Search For Movies, ex. Title, keywords</h1>
				<h1 class="browse__text">"${search}" ${error}</h1>
			</div>
	`
}

main(searchKey, type);