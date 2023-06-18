import {FC} from "react";

import styles from "./MovieName.module.css";

interface IProps {
    title: string;
}

const MovieName: FC<IProps> = ({title}) => {

    return (
        <div className={styles.movieNameContainer}>
            <h2 className={styles.movieNameHeading}>{title}</h2>
        </div>
    );
};

export default MovieName;