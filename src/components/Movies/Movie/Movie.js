import {PosterPreview} from "../../PosterPreview/PosterPreview";
import {StartRating} from "../../StarsRating/StartRating";
import {GenreBadge} from "../../GenreBadge/GenreBadge";
import {Trailer} from "../../Trailer/Trailer";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {useState} from "react";

import styles from './Movie.module.css';

import {PhotoIcon, UserGroupIcon} from "@heroicons/react/24/outline";
import {CheckIcon, PlusIcon} from "@heroicons/react/24/solid";

const Movie = ({movie}) => {
    const addMovie = () => {
        if (localStorage.key !== movie.title) {
            localStorage.setItem(`movie: ${movie.title}`, JSON.stringify(movie));
            localStorage.getItem('true');
            setSaved(true)
        }
    };

    const {
        backdrop_path, genres, homepage,
        original_title, overview, poster_path,
        release_date, runtime, title, videos, vote_average,
        vote_count} = movie;

    const [saved, setSaved] = useState(false);

    return (
        <motion.div className={styles.container}
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             exit={{opacity: 0}}
        >
            <div className={styles.movieInfoContainer}>
                <div className={styles.movieTitle}>
                    <h2>{title}</h2>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.movieDates}>
                        <h4>Original title: {original_title}</h4>
                        <div className={styles.date}>
                            <span>{release_date}</span>
                            <span>•</span>
                            <span>R</span>
                            <span>•</span>
                            <span>{runtime}m</span>
                        </div>
                    </div>
                    <div className={styles.ratingContainer}>
                        <div className={styles.rating}>
                            <p>IMDb RATING</p>
                            <StartRating rating={vote_average}/>
                        </div>
                        <div className={styles.homepageLink}>
                            <Link to={homepage} target={'_blank'}>Homepage</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.multimediaContainer}>
                <div className={styles.poster}>
                    {poster_path !== null &&  <PosterPreview poster={poster_path} alt={title}/>}
                </div>
                <div className={styles.trailer}>
                    <Trailer video={videos}/>
                </div>
                <div className={styles.photos}>
                    <div className={styles.backdropPoster}>
                        <PosterPreview poster={backdrop_path} alt={title}/>
                    </div>
                    <div className={styles.allPhotos}>
                        <PhotoIcon className={styles.photoIcon}/>
                        <p>View All Photos</p>
                    </div>
                </div>
            </div>
            <div className={styles.bottomContainer}>
                <div className={styles.genreBadgeDesc}>
                    <div className={styles.badges}>
                        {genres ? genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>): null}
                    </div>
                    <div>
                        <p className={styles.description}>{overview}</p>
                    </div>
                </div>
                <div className={styles.usersVotes}>
                    <div className={styles.watchlist} onClick={addMovie}>
                        {localStorage.getItem(`movie: ${movie.title}`) === null ? <div className={styles.notSaved}>
                            <PlusIcon className={styles.watchlistIcon}/>
                            <p>Add to Watchlist</p>
                        </div>:
                            <div className={styles.saved}>
                                <CheckIcon/>
                                <p>Saved!</p>
                            </div>
                        }
                    </div>
                    <div className={styles.votes}>
                        <UserGroupIcon className={styles.userIcon}/>
                        <p>Votes: {vote_count}</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export {Movie};