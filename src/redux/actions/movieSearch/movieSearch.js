import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {searchService} from "../../../services/searchService";

const initialState = {
    searchedMovie: [],
    errors: null,
    loading: null
};

const searchMovieRequest = createAsyncThunk(
    'movieSearch/searchMovieRequest',
    async({movie}, {rejectWithValue}) => {
        try {
            const {data} = await searchService.searchMovie(movie);
            return data;
        } catch (e) {
            return rejectWithValue(e.response.data())
        }
    }
);

const movieSearch = createSlice({
    name: 'movieSearch',
    initialState,
    reducer: {},
    extraReducers: builder =>
        builder
            .addCase(searchMovieRequest.fulfilled, (state, action) => {
                const {results} = action.payload;
                state.searchedMovie = results;
                state.loading = false;
            })
            .addCase(searchMovieRequest.pending, (state) => {
                state.loading = true;
            })
            .addCase(searchMovieRequest.rejected, (state, action) => {
                state.errors = action.payload
                state.loading = false;
            })
});

const {reducer: searchReducer} = movieSearch;

const searchActions = {
    searchMovieRequest
};

export {searchReducer, searchActions};