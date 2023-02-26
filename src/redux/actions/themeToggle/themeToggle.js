export default function isDarkModeReducer(state = true, action) {
    switch (action.type) {
        case 'toggleDarkMode': {
            return !state;
        }
        default:
            return state;
    }
}