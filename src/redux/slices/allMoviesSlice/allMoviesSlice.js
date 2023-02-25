import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../../services/movieService";

const initialState = {
    allMovies: [],
    currentPage: null,
    totalPages: null,
    errors: null,
    loading: null
};

const getAllMovies = createAsyncThunk(
    'allMoviesSlice/getAllMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAllMovies(page)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const allMoviesSlice = createSlice({
    name: 'allMoviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAllMovies.fulfilled, (state, action) => {
            const {page, results, total_pages} = action.payload;
            state.currentPage = page;
            state.totalPages = total_pages;
            state.allMovies = results;
            state.loading = false;
        })
        .addCase(getAllMovies.pending, (state) => {
            state.loading = true;
        })
        .addCase(getAllMovies.rejected, (state, action) => {
            state.errors = action.payload;
            state.loading = false;
        })
});

const {reducer: allMoviesReducer} = allMoviesSlice;

const allMoviesActions = {
    getAllMovies
};

export {allMoviesReducer, allMoviesActions}