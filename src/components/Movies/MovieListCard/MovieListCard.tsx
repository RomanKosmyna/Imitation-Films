import {PosterPreview} from "../PosterPreview";
import MovieName from "../MovieName/MovieName";
import MovieDate from "../MovieDate/MovieDate";
import MovieViewDetails from "../MovieViewDetails/MovieViewDetails";

import styles from './MovieListCard.module.css';

interface IData {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string;
    genre_ids: number[];
}

const MovieListCard = ({data}: IData) => {
    const {id, title, overview, release_date, poster_path} = data;
    return (
        <div className={styles.movieCardContainer}>
            <PosterPreview poster={poster_path} alt={title}/>
            <MovieName title={title}/>
            <MovieDate date={release_date}/>
            {/*<MovieOverview overview={overview}/>*/}
            <MovieViewDetails id={id}/>
        </div>
    );
};

export {MovieListCard};