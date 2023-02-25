import {GenresPage, MoviePage, MoviesPage, NotFoundPage, WatchListPage} from "./pages";
import {Navigate, useRoutes} from "react-router-dom";
import {useSelector} from "react-redux";
import {MainLayout} from "./layouts";
import {Genre} from "./components";

function App() {
    const isDarkMode = useSelector(state => state.theme);

    const routes = [
        {
            element: <MainLayout/>, path: '/', children: [
                {index: true, element: <Navigate to={'movie'}/>},
                {element: <MoviesPage/>, path: 'movie'},
                {element: <MoviePage/>, path: 'movie/:id'},
                {element: <GenresPage/>, path: 'genres'},
                {element: <Genre/>, path: 'genres/:id'},
                {element: <WatchListPage/>, path: 'watchlist'},
                {element: <NotFoundPage/>, path: '*'}
            ]
        }
    ];

    const routerElement = useRoutes(routes);

    return (
            <div className={'app'} data-theme={isDarkMode ? 'dark': 'light'}>
                {routerElement}
            </div>
    )
}

export {App};