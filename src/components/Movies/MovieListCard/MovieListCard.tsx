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

interface Data {
    data: IData;
}

const MovieListCard = ({data}: Data) => {

    const {id, title, release_date, poster_path} = data;
    return (
        <div className={styles.movieCardContainer}>
            <PosterPreview poster={poster_path} alt={title}/>
            <div className={styles.detailsContainer}>
                <MovieName title={title}/>
                <MovieDate date={release_date}/>
                <MovieViewDetails id={id}/>
            </div>
        </div>
    );
};

export {MovieListCard};