import styles from "./MovieTagline.module.css";
import {FC} from "react";

interface ITagline {
    tagline: string;
}

const MovieTagline: FC<ITagline> = ({tagline}) => {

    return (
        <>
            {tagline.length !== 0 && (
                <div className={styles.taglineContainer}>
                    <p className={styles.tagline}>"{tagline}"</p>
                </div>
            )}
        </>
    );
};

export default MovieTagline;