import MovieByGenreItem from "../MovieByGenreItem/MovieByGenreItem";

import styles from "./MoviesByGenre.module.css";

const MoviesByGenre = ({movies}: { movies: any[] }) => {

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