import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {movieService} from "../../../services";

import styles from "./MovieInfo.module.css";
import {IMovie} from "../../../interfaces";
import Movie from "../Movie/Movie";

const MovieInfo = () => {
    const {id}: {id: string} = useParams();
    const [movie, setMovie] = useState<IMovie | null>(null);

    useEffect(() => {
        movieService.getMovieById(id, "videos").then(({data}) => setMovie(data));
    },[id]);

    return (
        <div className={styles.movieWrapper}>
            {movie !== null ? (
                <Movie movie={movie}/>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default MovieInfo;