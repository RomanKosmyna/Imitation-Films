import {useEffect, useState} from "react";
import {movieService} from "../../services";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";

import styles from "./Genres.module.css";
import FilterByGenre from "./FilterByGenre/FilterByGenre";
import MoviesByGenre from "./MoviesByGenre/MoviesByGenre";
import GenreMenu from "./GenreMenu/GenreMenu";

const Genres = () => {
    const dispatch = useAppDispatch();
    const [movies, setMovies] = useState([]);
    const [chosenGenre, setChosenGenre] = useState("");
    const [query] = useSearchParams({page: '1'});
    const {moviesByGenre} = useAppSelector(state => state.genresReducer);

    useEffect(() => {
        if (moviesByGenre.length !== 0) {
            setMovies(moviesByGenre);
        } else {
            movieService.getMovies(query.get("page")).then(({data}) => setMovies(data.results));
        }
    }, [moviesByGenre, query, dispatch])

    return (
        <div className={styles.genresContainer}>
            <FilterByGenre/>
            <p className={styles.searchBy}>Search movies by:</p>
            <h2 className={styles.genreHeading}>
                {chosenGenre.length !== 0 ? chosenGenre : "All Movies"}
            </h2>
            <MoviesByGenre movies={movies}/>
            <GenreMenu activeGenre={chosenGenre} setter={setChosenGenre}/>
        </div>
    );
};

export default Genres;