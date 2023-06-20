import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services";

interface IState {
    genres: object,
    moviesByGenre: object,
    currentPage: null,
    totalPages: null,
    errors: boolean,
    loading: boolean
}

const initialState: IState = {
    genres: [],
    moviesByGenre: [],
    currentPage: null,
    totalPages: null,
    errors: false,
    loading: false
};

const getMovieGenres = createAsyncThunk(
    'genreSlice/getMovieGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllGenres()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getMoviesByGenre = createAsyncThunk(
    'genreSlice/getMoviesByGenre',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMoviesByGenre(id, page);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const genreSlice = createSlice<IState, {}>({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getMovieGenres.fulfilled, (state, action) => {
            state.genres = action.payload
            state.loading = false;
        })
        .addCase(getMovieGenres.pending, (state) => {
            state.loading = true;
        })
        .addCase(getMovieGenres.rejected, (state) => {
            state.loading = false;
        })

        .addCase(getMoviesByGenre.fulfilled, (state, action) => {
            const {page, results, total_pages} = action.payload;
            state.moviesByGenre = results;
            state.currentPage = page;
            state.totalPages = total_pages;
            state.loading = false;
        })
        .addCase(getMoviesByGenre.pending, (state) => {
            state.loading = true;
        })
        .addCase(getMoviesByGenre.rejected, (state) => {
            state.loading = false;
        })
});

const {reducer: genresReducer} = genreSlice;

const genresActions = {
    getMovieGenres,
    getMoviesByGenre
};

export {genresReducer, genresActions};