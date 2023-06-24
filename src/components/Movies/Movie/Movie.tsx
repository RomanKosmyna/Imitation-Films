import {FC} from "react";
import MovieImage from "./MovieImage/MovieImage";
import {IMovie} from "../../../interfaces";
import MovieDate from "../MovieDate/MovieDate";
import MovieName from "../MovieName/MovieName";
import MovieOverview from "../MovieOverview/MovieOverview";
import MovieHomepage from "./MovieHomepage/MovieHomepage";
import MovieRuntime from "./MovieRuntime/MovieRuntime";
import MovieTagline from "./MovieTagline/MovieTagline";
import MovieRating from "./MovieRating/MovieRating";
import MovieTrailer from "./MovieTrailer/MovieTrailer";
import MovieVote from "./MovieVote/MovieVote";
import MovieGenre from "./MovieGenre/MovieGenre";
import MovieProductionCompanies from "./MovieProductionCompanies/MovieProductionCompanies";
import MovieAddWatchlist from "../../Watchlist/MovieAddWatchlist/MovieAddWatchlist";

import styles from "./Movie.module.css";

interface IProps {
    movie: IMovie;
}

interface IGenres {
    genres: {id: number; name: string}[];
}

const Movie: FC<IProps> = ({movie}) => {
    if (!movie) {
        return null;
    }

    const {
        title,
        backdrop_path,
        genres,
        vote_average,
        vote_count,
        videos,
        runtime,
        poster_path,
        production_companies,
        tagline,
        overview,
        release_date,
        homepage
    } = movie;

    return (
        <div className={styles.movieContainer}>
            <div className={styles.topContainer}>
                {poster_path !== null && <MovieImage poster_path={poster_path} title={title}/>}
                <div className={styles.dataContainer}>
                    <MovieName title={title}/>
                    <MovieRuntime runtime={runtime}/>
                    <MovieDate date={release_date}/>
                    <MovieHomepage homepage={homepage}/>
                </div>
            </div>
            <div className={styles.genreWatchlistContainer}>
                <MovieGenre genres={genres}/>
                <MovieAddWatchlist movie={movie}/>
            </div>
            <MovieTagline tagline={tagline}/>
            <MovieOverview overview={overview}/>
            <MovieRating rating={vote_average}/>
            <MovieVote count={vote_count}/>
            <MovieTrailer videos={videos} backdrop={backdrop_path} title={title}/>
            <MovieProductionCompanies companies={production_companies}/>
        </div>
    );
};

export default Movie;