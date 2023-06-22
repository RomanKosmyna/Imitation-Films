import {useEffect, useState} from "react";
import {movieService} from "../../services";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";

import styles from "./Genres.module.css";
import FilterByGenre from "./FilterByGenre/FilterByGenre";
import MoviesByGenre from "./MoviesByGenre/MoviesByGenre";
import GenreMenu from "./GenreMenu/GenreMenu";
import GenrePagination from "./GenrePagination/GenrePagination";

const Genres = () => {
    const dispatch = useAppDispatch();
    const [movies, setMovies] = useState([]);
    const [chosenGenre, setChosenGenre] = useState("");
    const [genreQuery] = useSearchParams({page: '1'});
    const {moviesByGenre} = useAppSelector(state => state.genresReducer);
    useEffect(() => {
        console.log(moviesByGenre)
        if (moviesByGenre.length !== 0) {
            setMovies(moviesByGenre);
        } else {
            movieService.getMovies(genreQuery.get("page")).then(({data}) => setMovies(data.results));
        }
    }, [moviesByGenre, genreQuery, dispatch])

    return (
        <div className={styles.genresContainer}>
            <FilterByGenre/>
            <p className={styles.searchBy}>Search movies by:</p>
            <h2 className={styles.genreHeading}>
                {chosenGenre.length !== 0 ? chosenGenre : "All Movies"}
            </h2>
            <MoviesByGenre movies={movies}/>
            <GenreMenu activeGenre={chosenGenre} setter={setChosenGenre}/>
            {/*<GenrePagination/>*/}
        </div>
    );
};

export default Genres;