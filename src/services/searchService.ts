import {apiService} from "./apiService";

import {urls} from "../configs";

const searchService = {
    searchMovie: (query) => apiService.get(urls.searchMovie, {params: {query}})
};

export {searchService};