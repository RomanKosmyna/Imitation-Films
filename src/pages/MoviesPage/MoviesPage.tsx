import SearchedMovies from "../../components/SearchedMovies/SearchedMovies";
import {MoviesList} from "../../components/Movies/MoviesList";
import {toggleActions} from "../../redux/slices/toggle.slice";
import {searchActions} from "../../redux/slices/search.slice";
import Search from "../../components/Search/Search";
import {useAppDispatch} from "../../hooks";
import {useEffect} from "react";

import styles from "../../styles/page.module.css";

const MoviesPage = () => {
    const dispatch =useAppDispatch();

    useEffect(() => {
        dispatch(toggleActions.toggleMobNavigation(false));
        dispatch(searchActions.searchMovie({ movie: "" }));
    },[dispatch]);

    return (
        <main className={styles.page}>
            <Search/>
            <SearchedMovies/>
            <MoviesList/>
        </main>
    );
};

export {MoviesPage};