import MovieRemoveWatchlist from "../MovieRemoveWatchlist/MovieRemoveWatchlist";
import MovieViewDetails from "../../Movies/MovieViewDetails/MovieViewDetails";
import {PosterPreview} from "../../Movies/PosterPreview";

import styles from "./MovieWatchlistItem.module.css";

interface IData {
    id: number;
    title: string;
    poster_path: string;
}

interface IProps {
    data: IData;
    onRemove: (value: string) => void;
}

const MovieWatchlistItem = ({data, onRemove}: IProps) => {
    const {id, title, poster_path} = data;

    const removeFromWatchlist = () => {
        onRemove(title);
    };

    return (
        <div className={styles.watchlistItemContainer}>
            <PosterPreview poster={poster_path} alt={title}/>
            <div className={styles.mainItemPartContainer}>
                <div className={styles.headingContainer}>
                    <h2 className={styles.itemHeading}>{title}</h2>
                </div>
                <div className={styles.buttonContainer}>
                    <MovieViewDetails id={id}/>
                    <MovieRemoveWatchlist title={title} onRemove={removeFromWatchlist}/>
                </div>
            </div>
        </div>
    );
};

export default MovieWatchlistItem;