import {PosterPreview} from "../Movies/PosterPreview";
import {StartRating} from "../StarsRating/StartRating";
import {Link} from "react-router-dom";
import {useState} from "react";

import {motion} from "framer-motion";

import styles from './Watchlist.module.css';

const Watchlist = () => {
    const [render, setRender] = useState(false);
    let values = [],
        keys = Object.keys(localStorage),
        i = keys.length

    while (i--) {
        values.push(JSON.parse(localStorage.getItem(keys[i])))
    }

    const remove = (movie) => {
        localStorage.removeItem(`movie: ${movie.title}`);
        setRender(!render)
    }

    return (
        <div>

        </div>
        // <motion.div className={styles.mainContainer}
        //             initial={{opacity: 0}}
        //             animate={{opacity: 1}}
        //             exit={{opacity: 0}}
        // >
        //     <div className={styles.container}>
        //         {values.length !== 0 ? values.map(movie =>
        //             <div className={styles.itemContainer} key={movie.id}>
        //                 <PosterPreview poster={movie.poster_path} alt={movie.title}/>
        //                 <div className={styles.info}>
        //                     <h2>{movie.title}</h2>
        //                     <StartRating rating={movie.vote_average}/>
        //                     <p>Runtime: {movie.runtime} minutes</p>
        //                     <p className={styles.overview}>{movie.overview}</p>
        //                     <div className={styles.btnContainer}>
        //                         <Link to={`/movie/${movie.id}`} className={styles.details}>View Details</Link>
        //                         <button className={styles.remove}  onClick={() => remove(movie)}>Remove from Watchlist</button>
        //                     </div>
        //                 </div>
        //             </div>): <div className={styles.nothingAdded}>
        //             <h1>Nothing has been added to your Watchlist yet!</h1>
        //             <h2>You can add a movie by clicking a "Add to Watchlist" button on a movie page.</h2>
        //         </div>
        //         }
        //     </div>
        // </motion.div>
    );
};

export {Watchlist};