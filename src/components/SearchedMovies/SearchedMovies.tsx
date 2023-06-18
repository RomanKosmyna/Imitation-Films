import {useAppSelector} from "../../hooks";

import styles from "./SearchedMovies.module.css";
import {useEffect, useState} from "react";

const SearchedMovies = () => {
    const [movies, setMovies] = useState([]);
    const {searchedMovie} = useAppSelector(state => state.searchReducer);

    useEffect(() => {
        setMovies(searchedMovie);
    },[searchedMovie])

    return (
        <>
            {movies.length !== 0 &&
                <div className={styles.searchedMoviesContainer}>
                    {movies?.map(movie => <div>
                        {movie.title}
                    </div>)}
                </div>
            }
        </>
    );
};

export default SearchedMovies;