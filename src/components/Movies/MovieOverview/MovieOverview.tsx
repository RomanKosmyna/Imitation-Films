import {FC} from "react";

import styles from "./MovieOverview.module.css";

interface IProps {
    overview: string;
}

const MovieOverview: FC<IProps> = ({overview}) => {

    return (
        <div className={styles.movieOverviewContainer}>
            <p className={styles.movieOverview}>{overview}</p>
        </div>
    );
};

export default MovieOverview;