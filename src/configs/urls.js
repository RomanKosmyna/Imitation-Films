import {apiKey} from "./apiKey";

const movieBaseURL = 'https://api.themoviedb.org/3';
const imageBaseURL = 'https://image.tmdb.org/t/p/w500';

const urls = {
    allMovies: `/discover/movie?api_key=${apiKey}`,
    popular: `/movie/popular?api_key=${apiKey}`,
    genres: `/genre/movie/list?api_key=${apiKey}`,
    getMovieById: (id) => `/movie/${id}?api_key=${apiKey}`,
    getMoviesByGenre: (id) => `/discover/movie?api_key=${apiKey}&with_genres=${id}`,
    searchMovie: `/search/movie`
}

export {movieBaseURL, imageBaseURL, urls};