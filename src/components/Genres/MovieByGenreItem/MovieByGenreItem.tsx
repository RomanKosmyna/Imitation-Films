import {IMovieByGenre} from "../../../interfaces";
import {imageBaseURL} from "../../../configs";
import {Link} from "react-router-dom";

import styles from "./MovieByGenreItem.module.css";

interface IProps {
    movie: IMovieByGenre;
}

const MovieByGenreItem = ({movie}: IProps) => {

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