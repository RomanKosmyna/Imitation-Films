import {apiService} from "./apiService";

import {urls} from "../configs";

const movieService = {
    getMovies: (page?: string | null) => apiService.get(urls.allMovies, {params: {page}}),
    getMovieById: (id: number, append_to_response: string) => apiService.get(urls.getMovieById(id), {params: {append_to_response}}),
    getAllGenres: () => apiService.get(urls.genres),
    getMoviesByGenre: (id: number,  page = 1) => apiService.get(urls.getMoviesByGenre(id), {params: {page}})
}

export {movieService};