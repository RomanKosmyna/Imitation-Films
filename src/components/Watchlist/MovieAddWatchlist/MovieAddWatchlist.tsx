import {IMovie} from "../../../interfaces";
import {FC, useEffect, useRef, useState} from "react";

import styles from "./MovieAddWatchlist.module.css";

interface IProps {
    movie: IMovie | null;
}

const MovieAddWatchlist: FC<IProps> = ({movie}) => {
    const {id, title, poster_path} = movie;
    const [status, setStatus] = useState(
        localStorage.getItem("status") === "true"
    );

    useEffect(() => {
        localStorage.setItem("status", status.toString());
    }, [status]);

    const bookmark = () => {
        const movieObject = {id, title, poster_path};
        const movieJSON = JSON.stringify(movieObject);
        localStorage.setItem(title, movieJSON);
        setStatus(!status);
    };

    const unbookmark = () => {
        localStorage.removeItem(title);
        setStatus(!status);
    };

    return (
        <div className={styles.addWatchlistContainer}>
            {
                status ?
                    <button type="button" className={styles.watchlistBtn} onClick={unbookmark}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className={`w-6 h-6 ${styles.added}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                        </svg>
                    </button> :
                    <button type="button" className={styles.watchlistBtn} onClick={bookmark}>
                        <svg xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24"
                             strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${styles.bookmark}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/>
                        </svg>
                    </button>
            }


            {/*{(!isChecked && !localStorage.getItem(movie?.title)) &&*/}
            {/*    <button type="button" className={styles.watchlistBtn} ref={ref} onClick={bookmark}>*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg"*/}
            {/*             fill="none" viewBox="0 0 24 24"*/}
            {/*             strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${styles.bookmark}`}>*/}
            {/*            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/>*/}
            {/*        </svg>*/}
            {/*    </button>*/}
            {/*}*/}
            {/*{(isChecked || localStorage.getItem(movie?.title)) &&*/}
            {/*    */}
            {/*}*/}
        </div>
    )
        ;
};

export default MovieAddWatchlist;