import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../../services/movieService";

const initialState = {
    genres: [],
    moviesByGenre: [],
    currentPage: null,
    totalPages: null,
    errors: null,
    loading: null
};

const getMovieGenres = createAsyncThunk(
    'genresSlice/getMovieGenres',
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
    'genresSlice/getMoviesByGenre',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMoviesByGenre(id, page)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getMovieGenres.fulfilled, (state, action) => {
            state.loading = false;
            state.genres = action.payload
        })
        .addCase(getMovieGenres.pending, (state) => {
            state.loading = true;
        })
        .addCase(getMovieGenres.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload
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
        .addCase(getMoviesByGenre.rejected, (state, action) => {
            state.errors = action.payload
            state.loading = false;
        })
});

const {reducer: genresReducer} = genresSlice;

const genresActions = {
    getMovieGenres,
    getMoviesByGenre
};

export {genresReducer, genresActions};