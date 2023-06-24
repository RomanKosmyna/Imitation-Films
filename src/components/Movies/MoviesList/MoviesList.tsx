import MoviePagination from "../MoviePagination/MoviePagination";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {IMovieByGenre} from "../../../interfaces";
import {useSearchParams} from "react-router-dom";
import {MovieListCard} from "../MovieListCard";
import {moviesActions} from "../../../redux";
import {useEffect} from "react";

import styles from './MoviesList.module.css';

const MoviesList = () => {
    const dispatch = useAppDispatch();
    const {allMovies} = useAppSelector(state => state.moviesReducer);
    const [query] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(moviesActions.getMovies({page: query.get("page")}));
    },[query, dispatch]);

    return (
        <div className={styles.moviesContainer}>
            {allMovies?.map((movie: IMovieByGenre) => <MovieListCard key={movie.id} data={movie}/>)}
            <MoviePagination/>
        </div>
    );
}

export {MoviesList};