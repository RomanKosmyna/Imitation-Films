import styles from "./MovieAddWatchlist.module.css";
import {IMovie} from "../../../interfaces";
import {FC, useEffect, useRef, useState} from "react";

interface IProps {
    movie: IMovie | null;
}

const MovieAddWatchlist: FC<IProps> = ({movie}) => {
    const ref = useRef();

    useEffect(() => {
        if (localStorage.getItem(movie?.title)) {

        }
    },[])

    return (
        <div className={styles.addWatchlistContainer}>
            {/*<button ref={ref} onClick={bookmark} className={styles.btn}>click</button>*/}

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
            {/*    <button type="button" className={styles.watchlistBtn} onClick={removeBookmark}>*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}*/}
            {/*             stroke="currentColor" className={`w-6 h-6 ${styles.added}`}>*/}
            {/*            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>*/}
            {/*        </svg>*/}
            {/*    </button>*/}
            {/*}*/}
        </div>
    )
        ;
};

export default MovieAddWatchlist;