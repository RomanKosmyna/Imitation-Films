import changeThemeModeReducer from "../actions/themeToggle/themeToggle";
import {moviesReducer} from "../actions/getMovies/movies.slice";
import {toggleReducer} from "../slices/toggle.slice";
import {searchReducer} from "../slices/search.slice";
import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import {genresReducer} from "../slices/genre.slice";

const rootReducer = combineReducers({
    toggleReducer,
    themeReducer: changeThemeModeReducer,
    searchReducer,
    moviesReducer,
    genresReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer,
});

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore["dispatch"];

export type {RootState, AppStore, AppDispatch};

export {setupStore};