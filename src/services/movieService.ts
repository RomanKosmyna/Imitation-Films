import {apiService} from "./apiService";

import {urls} from "../configs";

const movieService = {
    getMovies: (page?: string | null) => apiService.get(urls.allMovies, {params: {page}}),
    getMovieById: (id, append_to_response) => apiService.get(urls.getMovieById(id), {params: {append_to_response}}),
    // getAllPopular: () => apiService.get(urls.popular),
    getAllGenres: () => apiService.get(urls.genres),
    getMoviesByGenre: (id,  page = 1) => apiService.get(urls.getMoviesByGenre(id), {params: {page}})
}

export {movieService};