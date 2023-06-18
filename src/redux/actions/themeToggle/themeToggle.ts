export default function changeThemeModeReducer(state = true, action) {
    if (action.type === "toggle_theme") {
        localStorage.setItem("isDarkTheme", action.payload);
        return action.payload;
    } else {
        const storedThemeMode = localStorage.getItem("isDarkTheme");
        return storedThemeMode ? storedThemeMode === "true" : state;
    }
};