import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../../services/movieService";

const initialState = {
    popularMovies: [],
    errors: null,
    loading: null
};

const getAllPopular = createAsyncThunk(
    'popularMoviesSlice/getAllPopular',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllPopular()
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const popularMoviesSlice = createSlice({
    name: 'popularMoviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAllPopular.fulfilled, (state, action) => {
            state.loading = false;
            state.popularMovies = action.payload
        })
        .addCase(getAllPopular.pending, (state) => {
            state.loading = true;
        })
        .addCase(getAllPopular.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload
        })
});

const {reducer: popularMoviesReducer} = popularMoviesSlice;

const popularMoviesActions = {
    getAllPopular
};

export {popularMoviesReducer, popularMoviesActions};