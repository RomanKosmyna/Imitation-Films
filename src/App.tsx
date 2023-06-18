import {useAppSelector} from "./hooks";
import {Routes} from "./components";

function App() {
    const theme = useAppSelector(state => state.themeReducer);

    return (
            <div className={'app'} data-theme={theme ? 'dark': 'light'}>
                <Routes/>
            </div>
    )
}

export {App};