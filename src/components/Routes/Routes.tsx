import {MainLayout} from "../../layouts";
import {Navigate, useLocation, useRoutes} from "react-router-dom";
import {GenresPage, MoviePage, MoviesPage, NotFoundPage} from "../../pages";
import {Genre} from "../GenresComponent/Genre/Genre";
import {WatchListPage} from "../../pages/WatchListPage";

const Routes = () => {
    const location = useLocation();

    const routes = [
        {
            element: <MainLayout/>, path: '/', location: location, key: location.pathname, children: [
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
        routerElement
    );
};

export {Routes};