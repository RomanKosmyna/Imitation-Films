import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IState {
    toggleMobNavigation: boolean;
    genreMenu: boolean;
}

const initialState: IState = {
    toggleMobNavigation: false,
    genreMenu: false
};

const toggleSlice = createSlice({
    name: "toggleSlice",
    initialState,
    reducers: {
        toggleMobNavigation: (state: IState, action: PayloadAction<boolean>) => {
            state.toggleMobNavigation = action.payload;
        },
        toggleGenreMenu: (state: IState, action: PayloadAction<boolean>) => {
            state.genreMenu = action.payload;
        }
    }
});

const {reducer: toggleReducer, actions: {toggleMobNavigation, toggleGenreMenu}} = toggleSlice;

const toggleActions = {
    toggleMobNavigation,
    toggleGenreMenu
};

export {toggleReducer, toggleActions};