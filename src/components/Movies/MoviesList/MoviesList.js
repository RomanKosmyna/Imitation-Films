import {MovieListCard} from "../MovieListCard/MovieListCard";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {allMoviesActions} from "../../../redux";
import {useEffect} from "react";

import {motion} from "framer-motion";

import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/24/solid";

import styles from './MoviesList.module.css';

const MoviesList = () => {
    const {allMovies, currentPage, totalPages} = useSelector(state => state.allMovies);
    const [query, setQuery] = useSearchParams({page: '1'});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allMoviesActions.getAllMovies({page: query.get('page')})
        )
    },[query]);

    return (
        <motion.div className={styles.moviesListContainer}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
        >
            <div className={styles.moviesList}>
                {allMovies.length !== 0 && allMovies.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <div className={'menuBtn'}>
                <button disabled={currentPage <= 1} onClick={() => setQuery(query => ({page: +query.get('page')-1}))}>
                    <ArrowLeftIcon/>
                </button>
                <button disabled={currentPage >= totalPages} onClick={() => setQuery(query => ({page: +query.get('page')+1}))}>
                    <ArrowRightIcon/>
                </button>
            </div>
        </motion.div>
    );
}

export {MoviesList};