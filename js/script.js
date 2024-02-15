let numberOfFilms = prompt('Скільки фільмів ви подивилися?', '');


let PersonalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

PersonalMovieDB.movies[prompt('Котрий з останніх фільмів ви подивилися?', '')] = prompt('Як би ви його оцінили?', '');

console.log(PersonalMovieDB);