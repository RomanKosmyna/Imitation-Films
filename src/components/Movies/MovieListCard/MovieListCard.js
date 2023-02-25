import {PosterPreview} from "../../PosterPreview/PosterPreview";

import styles from './MovieListCard.module.css';
import {Link} from "react-router-dom";

const MovieListCard = ({movie}) => {
    const {id, title, poster_path} = movie;

    return (
        <div className={styles.movieListCard}>
            <div className={styles.movieListCardInner}>
                <div className={styles.moviePoster}>
                    <PosterPreview poster={poster_path} alt={title}/>
                </div>
                <div className={styles.movieInfo}>
                    <Link to={`/movie/${id.toString()}`}>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export {MovieListCard};