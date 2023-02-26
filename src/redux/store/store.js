import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {allMoviesReducer} from "../actions/getMovies/allMoviesSlice";
import {popularMoviesReducer} from "../slices/popularMoviesSlice/popularMoviesSlice";
import {genresReducer} from "../actions/getGenres/genresSlice";
import {searchReducer} from "../actions/movieSearch/movieSearch";
import isDarkModeReducer from "../actions/themeToggle/themeToggle";
import {clickedReducer} from "../actions/clickedSlider/clickedSlider";

const rootReducer = combineReducers({
    allMovies: allMoviesReducer,
    popularMovies: popularMoviesReducer,
    genres: genresReducer,
    search: searchReducer,
    theme: isDarkModeReducer,
    clickedSlider: clickedReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
};