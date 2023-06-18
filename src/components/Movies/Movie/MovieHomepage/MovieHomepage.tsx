import {FC} from "react";

import styles from "./MovieHomepage.module.css";
import {Link} from "react-router-dom";

interface IHomepage {
    homepage: string;
}

const MovieHomepage: FC<IHomepage> = ({homepage}) => {

    return (
        <>
            {homepage.length !== 0 && (
                    <div className={styles.homepageContainer}>
                        <Link to={homepage} className={styles.homepageLink}>
                            Homepage
                        </Link>
                    </div>
            )}
        </>
    );
};

export default MovieHomepage;