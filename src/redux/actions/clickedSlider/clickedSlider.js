import {createSlice} from "@reduxjs/toolkit";

const clickedSlider = createSlice({
    name: 'clickedSlider',
    initialState: {
        clicked: false,
        movieInfo: []
    },
    reducers: {
        clicked: (state, action) => {
            state.movieInfo = action.payload;
        }
    }
});

const {reducer: clickedReducer, actions: {clicked}} = clickedSlider;

const clickedSliderActions = {
    clicked
};

export {clickedReducer, clickedSliderActions};

