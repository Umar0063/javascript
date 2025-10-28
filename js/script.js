"use strict";

const numberOfFilm = +prompt("Сколько фильмов вы уже смотрели?", "");

const personalMovieDB = {
  count: numberOfFilm,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = prompt("На сколько его оцените?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = prompt("На сколько его оцените?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

if (1) {
  console.log("ok!");
} else {
  console.log("Error");
}

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('много');
// } else {
//     console.log('ok');
// }

// num === 50 ? console.log("ok") : console.log("Error");

const num = 51;

// switch (num) {
//     case 49:
//         console.log('not');
//         break;
//     case 100:
//         console.log('not');
//         break;
//     case 50:
//         console.log('yes');
//         break;
//     default:
//         console.log('не в этот раз');
//         break;
// }
