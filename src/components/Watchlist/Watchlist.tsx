import MovieWatchlistItem from "./MovieWatchlistItem/MovieWatchlistItem";
import {useEffect, useState} from "react";
import {IMovie} from "../../interfaces";

import styles from './Watchlist.module.css';

const Watchlist = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const allMovies = Object.keys(localStorage);
        const getMovies = allMovies.map(movie => {
            const movieData = localStorage.getItem(movie);
            return movieData ? JSON.parse(movieData) : null;
        });
        setMovies(getMovies);
    }, []);

    const removeMovie = (title: string) => {
        localStorage.removeItem(title);
        const updateMovies = movies.filter(movie => movie.title !== title);
        setMovies(updateMovies);
    };

    return (
        <div className={styles.watchlistContainer}>
            {movies.map((movie, index) => (
                typeof movie === "object" &&
                <MovieWatchlistItem key={index} data={movie} onRemove={removeMovie}
                />
            ))}
            {!movies.some(movie => typeof movie === "object") && (
                <div className={styles.emptyContainer}>
                    <p className={styles.emptyTextOne}>Your Watchlist is currently empty.</p>
                    <p className={styles.emptyTextTwo}>To add movies to your watchlist, click on the plus button on their respective pages.</p>
                </div>
            )}
        </div>
    );
};

export {Watchlist};