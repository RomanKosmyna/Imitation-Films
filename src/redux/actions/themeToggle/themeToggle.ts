import {PayloadAction} from "@reduxjs/toolkit";

export default function changeThemeModeReducer(state = true, action: PayloadAction<string>) {
    if (action.type === "toggle_theme") {
        localStorage.setItem("isDarkTheme", action.payload);
        return action.payload;
    } else {
        const storedThemeMode = localStorage.getItem("isDarkTheme");
        return storedThemeMode ? storedThemeMode === "true" : state;
    }
};