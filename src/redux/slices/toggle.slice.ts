import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IState {
    toggleMobNavigation: boolean;
}

const initialState: IState = {
    toggleMobNavigation: false,
};

const toggleSlice = createSlice({
    name: "toggleSlice",
    initialState,
    reducers: {
        toggleMobNavigation: (state: IState, action: PayloadAction<boolean>) => {
            state.toggleMobNavigation = action.payload;
        }
    }
});

const {reducer: toggleReducer, actions: {toggleMobNavigation}} = toggleSlice;

const toggleActions = {
    toggleMobNavigation
};

export {toggleReducer, toggleActions};