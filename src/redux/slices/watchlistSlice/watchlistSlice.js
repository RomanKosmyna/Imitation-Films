import {createSlice} from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
    name: 'watchlistSlice',
    initialState: {
        watchlist: []
    },
    reducers: {
        addToWatchlist: (state, action) => {
            state.watchlist = action.payload;
        }
    }
});

const {reducer: watchlistReducer, actions: {addToWatchlist}} = watchlistSlice;

const watchlistActions = {
    addToWatchlist
};

export {watchlistReducer, watchlistActions};