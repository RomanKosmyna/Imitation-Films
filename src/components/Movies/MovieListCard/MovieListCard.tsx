import {PosterPreview} from "../PosterPreview";
import styles from './MovieListCard.module.css';
import MovieName from "../MovieName/MovieName";
import MovieOverview from "../MovieOverview/MovieOverview";
import MovieDate from "../MovieDate/MovieDate";
import GenreTags from "../../GenreTags/GenreTags/GenreTags";
import {useEffect, useState} from "react";
import {apiService} from "../../../services";
import urls from "../../../configs/"
import MovieViewDetails from "../MovieViewDetails/MovieViewDetails";

interface IData {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    genre_ids: number[];
}

const MovieListCard = ({data}: IData) => {
    const {id, title, overview, release_date, poster_path, genre_ids} = data;
    return (
        <div className={styles.movieCardContainer}>
            <PosterPreview poster={poster_path} alt={title}/>
            <MovieName title={title}/>
            <MovieDate date={release_date}/>
            {/*<GenreTags genre={genre_ids}/>*/}
            {/*<MovieOverview overview={overview}/>*/}
            <MovieViewDetails id={id}/>
        </div>
        // <motion.div className={styles.movieListCard}
        //             initial={{opacity: 0}}
        //             animate={{opacity: 1}}
        //             exit={{opacity: 0}}
        // >
        //     <div className={styles.movieListCardInner}>
        //         <div className={styles.moviePoster}>
        //             {/*<PosterPreview poster={poster_path} alt={title}/>*/}
        //         </div>
        //         <div className={styles.movieInfo}>
        //             <Link to={`/movie/${id.toString()}`}>View Details</Link>
        //         </div>
        //     </div>
        // </motion.div>
    );
};

export {MovieListCard};