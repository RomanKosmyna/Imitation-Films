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

import styles from "./Movie.module.css";
import MovieAddWatchlist from "../MovieAddWatchlist/MovieAddWatchlist";

interface IProps {
    movie: IMovie | null;
}

const Movie: FC<IProps> = ({movie}) => {
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
                <MovieImage poster_path={poster_path} title={title}/>
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
            <MovieTrailer video={videos} backdrop={backdrop_path} title={title}/>
            <MovieProductionCompanies companies={production_companies}/>
        </div>
    );
};

export default Movie;