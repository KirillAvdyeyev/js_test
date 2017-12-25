// axios.get('http://www.myapifilms.com/imdb/top?token=743c6d03-cb1d-4fc2-9265-7d7620e35287&format=json&data=0')
//   .then(function (response) {
//     console.log(response);
//   })
// .catch(function (error) {
//   console.log(error);
// });

// 743c6d03-cb1d-4fc2-9265-7d7620e35287


// 2. Проект, который делали на занятии залить на гит. 

// 3. Два таска на команду:

//   3.1 Реализация перехода на страницу детали и просмотр инфы по деталям
//   3.2 Страница со списком фильмов, которые идут в кинотеатрах (in theathers)

//   запрос не отрабатывает постоянно пишет сетевая ошбка

// axios.get('http://www.myapifilms.com/imdb/inTheaters?token=743c6d03-cb1d-4fc2-9265-7d7620e35287&format=json&language=en-us')
//   .then(function (response) {
//     console.log(response);
//   })
// .catch(function (error) {
//   console.log(error);
// });

// 

const tempData = {
	"data": {
		"movies": [
			{
				"title": "The Shawshank Redemption",
				"year": "1994",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY67_CR0,0,45,67_AL_.jpg",
				"idIMDB": "tt0111161",
				"rating": "9.2",
				"ranking": 1
			},
			{
				"title": "The Godfather",
				"year": "1972",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BY2Q2NzQ3ZDUtNWU5OC00Yjc0LThlYmEtNWM3NTFmM2JiY2VhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR1,0,45,67_AL_.jpg",
				"idIMDB": "tt0068646",
				"rating": "9.2",
				"ranking": 2
			},
			{
				"title": "The Godfather: Part II",
				"year": "1974",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjZiNzIxNTQtNDc5Zi00YWY1LThkMTctMDgzYjY4YjI1YmQyL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY67_CR1,0,45,67_AL_.jpg",
				"idIMDB": "tt0071562",
				"rating": "9.0",
				"ranking": 3
			},
			{
				"title": "The Dark Knight",
				"year": "2008",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UY67_CR0,0,45,67_AL_.jpg",
				"idIMDB": "tt0468569",
				"rating": "9.0",
				"ranking": 4
			},
			{
				"title": "12 Angry Men",
				"year": "1957",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX45_CR0,0,45,67_AL_.jpg",
				"idIMDB": "tt0050083",
				"rating": "8.9",
				"ranking": 5
			},
			{
				"title": "Schindler's List",
				"year": "1993",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX45_CR0,0,45,67_AL_.jpg",
				"idIMDB": "tt0108052",
				"rating": "8.9",
				"ranking": 6
			},
			{
				"title": "Pulp Fiction",
				"year": "1994",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UY67_CR0,0,45,67_AL_.jpg",
				"idIMDB": "tt0110912",
				"rating": "8.9",
				"ranking": 7
			},
			{
				"title": "The Lord of the Rings: The Return of the King",
				"year": "2003",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BYWY1ZWQ5YjMtMDE0MS00NWIzLWE1M2YtODYzYTk2OTNlYWZmXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX45_CR0,0,45,67_AL_.jpg",
				"idIMDB": "tt0167260",
				"rating": "8.9",
				"ranking": 8
			},
			{
				"title": "The Good, the Bad and the Ugly",
				"year": "1966",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX45_CR0,0,45,67_AL_.jpg",
				"idIMDB": "tt0060196",
				"rating": "8.8",
				"ranking": 9
			},
			{
				"title": "Fight Club",
				"year": "1999",
				"urlPoster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY67_CR0,0,45,67_AL_.jpg",
				"idIMDB": "tt0137523",
				"rating": "8.8",
				"ranking": 10
			}
		]
	},
	"about": {
		"version": "2.34.0",
		"serverTime": "2017/12/24 17:20:44"
	}
};


console.log(tempData);


let listMovies = document.querySelector('.list-movies');
let sortByNameBtn = document.querySelector('.sortByName');
sortByNameBtn.addEventListener('click', sortByName);

let search = document.querySelector('#search');
search.addEventListener('keyup', searchByName);


let yearFrom = document.querySelector('.year-from');
let yearTo = document.querySelector('.year-to');
let filterByYearBtn = document.querySelector('.filterByYear');

filterByYearBtn.addEventListener('click', filterByYear);

let nowInTheatre = document.querySelector('.nowintheater');
nowInTheatre.addEventListener('click', goToPage);

function goToPage() {
	window.location = ('nowintheater.html');
}


function filterByYear() {
	listMovies.innerHTML = '';
	let tempArray = tempData.data.movies;
	tempArray = tempArray.filter((film) => {
		return film.year >= yearFrom.value && film.year <= yearTo.value;
	});
	renderList(tempArray);


}


function searchByName() {

	listMovies.innerHTML = '';
	let tempArray = tempData.data.movies;
	tempArray = tempArray.filter((film) => {
		return film.title.indexOf(this.value) === 0;
	});
	renderList(tempArray);

}

function sortByName() {
	listMovies.innerHTML = "";
	let tempArray = tempData.data.movies;
	tempArray.sort((a, b) => {
		return a.title > b.title ? 1 : -1;
	});
	renderList(tempArray);
}


function renderMovie(film) {
	let html = `
    <div class = "movie col s4">
    <img src = "${film.urlPoster}" alt = "poster">
    <h5>${film.title}</h5>
    <p>${film.year}</p>
    </div>
    `
	listMovies.insertAdjacentHTML('beforeend', html);
}

function renderList(list) {
	list.forEach((film) => { renderMovie(film) })
}

renderList(tempData.data.movies);