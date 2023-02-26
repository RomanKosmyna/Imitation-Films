import {PopularMoviesCarousel} from "../../MoviesCarousel/PopularMoviesCarousel/PopularMoviesCarousel";
import {useDispatch, useSelector} from "react-redux";
import {genresActions} from "../../../redux";
import {Link} from "react-router-dom";
import {useEffect} from "react";

import {motion} from "framer-motion";

import styles from './Genres.module.css';

const Genres = () => {
    const {genres: {genres}} = useSelector(state => state.genres)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresActions.getMovieGenres())
    },[dispatch])

    return (
        <motion.div className={styles.container}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
        >
            <div className={styles.genreContainer}>
                <div className={styles.GenreBar}>
                    {genres && genres.map(genre => <div key={genre.id} className={styles.genre}>
                        <Link to={`${genre.id}?${genre.name}`} id={genre.id.toString()}>{genre.name}</Link>
                    </div>)}
                </div>
            </div>
            <PopularMoviesCarousel/>
        </motion.div>
    );
};

export {Genres};