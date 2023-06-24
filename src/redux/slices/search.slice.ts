import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {searchService} from "../../services";
import {IMovieByGenre} from "../../interfaces";

interface IState {
    searchedMovie: IMovieByGenre[],
    loading: boolean,
    errors: null;
}

const initialState: IState = {
    searchedMovie: [],
    loading: false,
    errors: null,
};

const searchMovie = createAsyncThunk(
    "searchSlice/searchMovie",
    async ({movie}: { movie: string }, {rejectWithValue}) => {
        try {
            const {data} = await searchService.searchMovie(movie);
            return data;
        } catch (e: any) {
            return rejectWithValue(e.response.data);
        }
    }
);

const searchSlice = createSlice<IState, {}>({
    name: "searchSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder.addCase(searchMovie.fulfilled, (state: IState, action: PayloadAction<any>) => {
            const {results} = action.payload;
            state.searchedMovie = results;
            state.loading = false;
        })
            .addCase(searchMovie.pending, (state: IState) => {
                state.loading = true;
            })
            .addCase(searchMovie.rejected, (state: IState, action: PayloadAction<any>) => {
                state.errors = action.payload;
                state.loading = false;
            })
});

const {reducer: searchReducer} = searchSlice;

const searchActions = {
    searchMovie
};

export {searchReducer, searchActions};