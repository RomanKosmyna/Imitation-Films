import MovieRemoveWatchlist from "../MovieRemoveWatchlist/MovieRemoveWatchlist";
import MovieViewDetails from "../../Movies/MovieViewDetails/MovieViewDetails";
import {PosterPreview} from "../../Movies/PosterPreview";

import styles from "./MovieWatchlistItem.module.css";

const MovieWatchlistItem = ({data, onRemove}) => {
    const {id, title, poster_path} = data;

    const removeFromWatchlist = () => {
        onRemove(title);
    };

    return (
        <div className={styles.watchlistItemContainer}>
            <PosterPreview poster={poster_path} alt={title}/>
            <h2 className={styles.itemHeading}>{title}</h2>
            <div className={styles.buttonContainer}>
                <MovieViewDetails id={id}/>
                <MovieRemoveWatchlist title={title} onRemove={removeFromWatchlist}/>
            </div>
        </div>
    );
};

export default MovieWatchlistItem;