import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {allMoviesReducer} from "../slices/allMoviesSlice/allMoviesSlice";
import {popularMoviesReducer} from "../slices/popularMoviesSlice/popularMoviesSlice";
import {genresReducer} from "../slices/genresSlice/genresSlice";
import {searchReducer} from "../actions/movieSearch/movieSearch";
import isDarkModeReducer from "../actions/themeToggle/themeToggle";
import {watchlistReducer} from "../slices/watchlistSlice/watchlistSlice";

const rootReducer = combineReducers({
    allMovies: allMoviesReducer,
    popularMovies: popularMoviesReducer,
    genres: genresReducer,
    search: searchReducer,
    theme: isDarkModeReducer,
    watchlist: watchlistReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};