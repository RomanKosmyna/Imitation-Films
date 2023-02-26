import {PosterPreview} from "../../PosterPreview/PosterPreview";
import {Link} from "react-router-dom";

import {motion} from "framer-motion";

import styles from './MovieListCard.module.css';

const MovieListCard = ({movie}) => {
    const {id, title, poster_path} = movie;

    return (
        <motion.div className={styles.movieListCard}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
        >
            <div className={styles.movieListCardInner}>
                <div className={styles.moviePoster}>
                    <PosterPreview poster={poster_path} alt={title}/>
                </div>
                <div className={styles.movieInfo}>
                    <Link to={`/movie/${id.toString()}`}>View Details</Link>
                </div>
            </div>
        </motion.div>
    );
};

export {MovieListCard};