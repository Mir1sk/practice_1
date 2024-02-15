let numberOfFilms = prompt('Hello скільки фільмів ви переглянули?', '');

let PersonalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}


// first try
for (let i = 1; i < 2; i++) {
  const film = prompt('Котрий був з останніх фільмів?', ''),
        rating = prompt('Як би ви його оцінили?', '');

  if (film != null && rating != null && film != '' && rating != '' && film.length < 50) {
    PersonalMovieDB.movies[film] = rating;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}

if (PersonalMovieDB.count <= 10) {
  alert('Переглянуто доволі мало фільмів')
} else if (PersonalMovieDB.count <= 30) {
  alert('Ви класичний глядач фільмів')
} else if (PersonalMovieDB.count <= 5000) {
  alert('Ви кіноман')
} else if (PersonalMovieDB.count > 5000) {
  alert('П*здабол, щось не вірю вам')
} else {alert('Трапилася помилка')}

console.log(PersonalMovieDB);

