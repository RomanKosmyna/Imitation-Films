import {imageBaseURL} from "../../../configs";

import styles from "./MovieByGenreItem.module.css";
import {Link} from "react-router-dom";

const MovieByGenreItem = ({movie}) => {
    const {id, poster_path, title} = movie;

    return (
        <Link to={`/movie/${id}`} className={styles.movieItemContainer}>
            <div className={styles.imageContainer}>
                <img src={imageBaseURL + poster_path} alt={title}/>
            </div>
            <div className={styles.titleContainer}>
                <h3 className={styles.title}>{title}</h3>
            </div>
        </Link>
    );
};

export default MovieByGenreItem;