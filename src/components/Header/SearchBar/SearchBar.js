import {PosterPreview} from "../../PosterPreview/PosterPreview";
import {StartRating} from "../../StarsRating/StartRating";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {searchActions} from "../../../redux";
import {Link} from "react-router-dom";

import {MagnifyingGlassIcon, XMarkIcon} from "@heroicons/react/24/solid";

import styles from './SearchBar.module.css';

const SearchMovie = () => {
    const {searchedMovie} = useSelector(state => state.search);
    const dispatch = useDispatch();
    const ref = useRef(null);

    const [searchValue, setSearchValue] = useState([]);

    useEffect(() => {
        dispatch(searchActions.searchMovieRequest({movie: searchValue}))
    },[dispatch, searchValue])

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    }

    const clearInput = () => {
        setSearchValue([])
        ref.current.value = '';
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <input type="text" placeholder={'Search for movie titles'} ref={ref} onChange={handleChange}/>
                <div className={styles.searchIcon}>
                    {!searchValue.length ? (
                        <MagnifyingGlassIcon/>
                    ) : <XMarkIcon id={styles.clearBtn} onClick={clearInput}/>}
                </div>
            </div>

            {searchedMovie.length !== 0 && <div className={styles.searchResultContainer}>
                {searchedMovie.length !== 0 && searchedMovie.slice(0, 15).map(movie =>
                    <Link onClick={clearInput} to={`/movie/${movie.id}`} key={movie.id} className={styles.searchResult}>
                        {movie.poster_path !== null && <PosterPreview poster={movie.poster_path} title={movie.title}/>}
                        <div className={styles.movieInfo}>
                            <p className={styles.title}>{movie.title}</p>
                            <p className={styles.releaseDate}>{movie.release_date}</p>
                            <StartRating rating={movie.vote_average}/>
                        </div>
                    </Link>)}
            </div>}
        </div>
    )
};

export {SearchMovie};