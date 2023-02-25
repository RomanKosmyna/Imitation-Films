import React from 'react';
import {imageBaseURL} from "../../../configs/urls";

import styles from './MovieCarousel.module.css';
import {GenreBadge} from "../../GenreBadge/GenreBadge";
import {Link} from "react-router-dom";

const MovieCarousel = ({movie}) => {
    const {id, title, poster_path, genre_ids} = movie;

    return (
        <Link to={`/movie/${id.toString()}`} className={styles.carouselItem}>
                <div className={styles.carouselItemImage}>
                    <img src={imageBaseURL + poster_path} alt={title}/>
                </div>
                <div className={styles.carouselItemInfo}>
                    {/*<p>{genre_ids}</p>*/}
                    {/*{genre_ids && genre_ids.map(genre => <GenreBadge genre={genre}/>)}*/}
                </div>
        </Link>
    );
};

export {MovieCarousel};