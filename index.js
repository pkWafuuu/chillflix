

async function main(){
	const movies = await fetch("https://www.omdbapi.com/?apikey=f5504bbb&s=drama");
	const moviesData = await movies.json();
	console.log(moviesData.Search[0]);
}

main();