import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../../redux";
import {Link} from "react-router-dom";
import {PopularMoviesCarousel} from "../MoviesCarousel/PopularMoviesCarousel/PopularMoviesCarousel";

import styles from './Genres.module.css';

const Genres = () => {
    const {genres: {genres}} = useSelector(state => state.genres)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresActions.getMovieGenres())
    },[dispatch])

    return (
        <div className={styles.container}>
            <div className={styles.GenreBar}>
                {genres && genres.map(genre => <div key={genre.id} className={styles.genre}>
                    <Link to={`${genre.id}?${genre.name}`} id={genre.id.toString()}>{genre.name}</Link>
                </div>)}
            </div>
            <PopularMoviesCarousel/>
        </div>
    );
};

export {Genres};