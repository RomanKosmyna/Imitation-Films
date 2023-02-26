import {useSelector} from "react-redux";

import {AnimatedRoutes} from "./components";

function App() {
    const isDarkMode = useSelector(state => state.theme);

    return (
            <div className={'app'} data-theme={isDarkMode ? 'dark': 'light'}>
                <AnimatedRoutes/>
            </div>
    )
}

export {App};