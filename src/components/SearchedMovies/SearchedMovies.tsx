import SearchedMoviesItem from "./SearchedMoviesItem/SearchedMoviesItem";
import {IMovieByGenre} from "../../interfaces";
import {useAppSelector} from "../../hooks";
import {useEffect, useState} from "react";

import styles from "./SearchedMovies.module.css";

const SearchedMovies = () => {
    const [movies, setMovies] = useState<IMovieByGenre[]>([]);
    const {searchedMovie} = useAppSelector(state => state.searchReducer);

    useEffect(() => {
        setMovies(searchedMovie);
    },[searchedMovie]);

    return (
        <>
            {movies.length !== 0 &&
                <div className={styles.searchedMoviesContainer}>
                    {movies?.map((movie) => (
                        <SearchedMoviesItem key={movie.id} {...movie}/>
                    ))}
                </div>
            }
        </>
    );
};

export default SearchedMovies;