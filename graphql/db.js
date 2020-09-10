import axios from "axios";
const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  return movies;
};

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};

export const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};

// using fetch example ===============================================================================================

// import fetch, { Request } from "node-fetch";

// const API_URL = "https://yts.mx/api/v2/list_movies.json?";

// export const getMovies = (limit, rating) => {
//   let REQUEST_URL = API_URL;
//   if (limit > 0) {
//     REQUEST_URL += `limit=${limit}`;
//   }
//   if (rating !== 0) {
//     REQUEST_URL += `&minimum_rating=${rating}`;
//   }
//   return fetch(REQUEST_URL)
//     .then((res) => res.json())
//     .then((json) => json.data.movies);
// };

// simple movie example ==============================================================================================

// let movies = [
//   {
//     id: 0,
//     name: "Star Wars - The new one",
//     score: 7.2,
//   },
//   {
//     id: 1,
//     name: "Avengers",
//     score: 8.3,
//   },
//   {
//     id: 2,
//     name: "The Godfather",
//     score: 9.1,
//   },
//   {
//     id: 3,
//     name: "Logan",
//     score: 7.8,
//   },
// ];

// export const getMovies = () => movies;

// export const getById = (id) => {
//   const filteredMovies = movies.filter((movie) => movie.id === id);
//   return filteredMovies[0];
// };

// export const deleteMovie = (id) => {
//   const cleanedMovies = movies.filter((movie) => movie.id !== id);
//   if (movies.length > cleanedMovies.length) {
//     movies = cleanedMovies;
//     return true;
//   } else {
//     return false;
//   }
// };

// export const addMovie = (name, score) => {
//   const newMovie = {
//     id: movies.length,
//     name,
//     score,
//   };
//   movies.push(newMovie);
//   return newMovie;
// };

// People Example =============================================================================================

// export const people = [
//   {
//     id: "0",
//     name: "Nicolas",
//     age: 18,
//     gender: "male",
//   },
//   {
//     id: "1",
//     name: "Anne",
//     age: 22,
//     gender: "female",
//   },
//   {
//     id: "2",
//     name: "David",
//     age: 20,
//     gender: "male",
//   },
//   {
//     id: "3",
//     name: "Jisu",
//     age: 17,
//     gender: "female",
//   },
// ];

// export const getById = (id) => {
//   const filteredPeople = people.filter((person) => person.id === String(id));
//   return filteredPeople[0];
// };

// export function getById(id) {
//   const filteredPeople = people.filter((person) => person.id === String(id));
//   return filteredPeople[0];
// }
