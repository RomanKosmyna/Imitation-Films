import {MainLayout} from "../../layouts";
import {Navigate, useLocation, useRoutes} from "react-router-dom";
import {GenresPage, MoviePage, MoviesPage, NotFoundPage, WatchListPage} from "../../pages";
import {Genre} from "../Genre/Genre";
import {AnimatePresence} from "framer-motion";

const AnimatedRoutes = () => {
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
            <AnimatePresence>
                {routerElement}
            </AnimatePresence>
    );
};

export {AnimatedRoutes};