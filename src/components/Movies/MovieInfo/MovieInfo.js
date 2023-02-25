import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import {movieService} from "../../../services/movieService";
import {Movie} from "../Movie/Movie";

import styles from './MovieInfo.module.css';

const MovieInfo = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        movieService.getMovieById(id, 'videos').then(({data}) => setMovie(data))
    }, [id]);

    return (
        <div className={styles.mainContainer}>
            {movie && <Movie movie={movie}/>}
        </div>
    );
};

export {MovieInfo};