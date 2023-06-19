import {imageBaseURL} from "../../../configs";
import {Link} from "react-router-dom";

import styles from "./SearchedMoviesItem.module.css";

const SearchedMoviesItem = ({id, poster_path, title}) => {
    // const {poster_path, title} = data;

    return (
        <Link to={`/movie/${id}`} className={styles.searchedMovieContainer}>
            {poster_path !== null ? (
                <div className={styles.searchedMovieImageContainer}>
                    <img src={imageBaseURL + poster_path} alt={title}/>
                </div>
            ) : <div className={styles.noPoster}></div>}
            <div className={styles.searchedMovieTitle}>
                <p>{title}</p>
            </div>
        </Link>
    );
};

export default SearchedMoviesItem;