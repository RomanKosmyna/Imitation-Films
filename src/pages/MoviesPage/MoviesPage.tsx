import SearchedMovies from "../../components/SearchedMovies/SearchedMovies";
import {MoviesList} from "../../components/Movies/MoviesList";
import Search from "../../components/Search/Search";

import styles from "../../styles/page.module.css";

const MoviesPage = () => {
    return (
        <main className={styles.page}>
            <Search/>
            <SearchedMovies/>
            <MoviesList/>
        </main>
    );
};

export {MoviesPage};