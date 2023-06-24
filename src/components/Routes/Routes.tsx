import {MainLayout} from "../../layouts/MainLayout";
import {Navigate, useLocation, useRoutes} from "react-router-dom";
import {WatchListPage} from "../../pages/WatchListPage";
import {NotFoundPage} from "../../pages/NotFoundPage";
import {GenresPage} from "../../pages/GenresPage";
import {MoviesPage} from "../../pages/MoviesPage";
import {MoviePage} from "../../pages/MoviePage";

const Routes = () => {
    const location = useLocation();

    const routes = [
        {
            element: <MainLayout/>, path: '/', location: location, key: location.pathname, children: [
                {index: true, element: <Navigate to={'movie'}/>},
                {element: <MoviesPage/>, path: 'movie'},
                {element: <MoviePage/>, path: 'movie/:id'},
                {element: <GenresPage/>, path: 'genres'},
                {element: <WatchListPage/>, path: 'watchlist'},
                {element: <NotFoundPage/>, path: '*'}
            ]
        }
    ];

    const routerElement = useRoutes(routes);

    return (
        routerElement
    );
};

export {Routes};