import MovieByGenreItem from "../MovieByGenreItem/MovieByGenreItem";
import {IMovieByGenre} from "../../../interfaces";

import styles from "./MoviesByGenre.module.css";

interface IProps {
    movies: IMovieByGenre[];
}

const MoviesByGenre = ({movies}: IProps) => {

    return (
        <>
            {movies.length !== 0 && (
                <div className={styles.moviesByGenreContainer}>
                    {movies.map(movie => <MovieByGenreItem key={movie.id} movie={movie}/>)}
                </div>
            )}
        </>
    );
};

export default MoviesByGenre;