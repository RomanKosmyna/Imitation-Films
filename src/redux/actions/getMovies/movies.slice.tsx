import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../../services";

interface IState {
    allMovies: object,
    currentPage: null,
    totalPages: null,
    errors: boolean,
    loading: boolean
}

const initialState: IState = {
    allMovies: [],
    currentPage: null,
    totalPages: null,
    errors: false,
    loading: false
};

const getMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovies(page)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const moviesSlice = createSlice<IState, {}>({
    name: 'moviesSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getMovies.fulfilled, (state, action) => {
            const {page, results, total_pages} = action.payload;
            state.currentPage = page;
            state.totalPages = total_pages;
            state.allMovies = results;
            state.loading = false;
        })
        .addCase(getMovies.pending, (state) => {
            state.loading = true;
        })
        .addCase(getMovies.rejected, (state, action) => {
            state.errors = true;
            state.loading = false;
        })
});

const {reducer: moviesReducer} = moviesSlice;

const moviesActions = {
    getMovies
};

export {moviesReducer, moviesActions}