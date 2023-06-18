import {FC} from "react";
import MovieAddWatchlist from "../../MovieAddWatchlist/MovieAddWatchlist";
import {imageBaseURL} from "../../../../configs";

import styles from "./MovieImage.module.css";

interface IProps {
    poster_path: string;
    title: string;
}

const MovieImage: FC<IProps> = ({poster_path, title}) => {

    return (
        <div className={styles.imageContainer}>
            <img src={imageBaseURL + poster_path} alt={title}/>
        </div>
    );
};

export default MovieImage;