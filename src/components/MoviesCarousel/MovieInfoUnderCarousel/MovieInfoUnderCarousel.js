import {PosterPreview} from "../../Movies/PosterPreview/PosterPreview";
import {StartRating} from "../../StarsRating/StartRating";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {motion} from "framer-motion";

import './MovieInfoUnderCarousel.css';

const MovieInfoUnderCarousel = () => {
    const {movieInfo} = useSelector(state => state.clickedSlider);

    const {id, overview, title, vote_average, backdrop_path, release_date} = movieInfo;

    return (
        <motion.div className={'movieInfoUnderCarouselContainer'}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 0.1}}
        >
            <div className={'movieInfoCarouselInfo'}>
                <h2>{title}</h2>
                <div className={'movieInfoCarouseRelease'}>{release_date}</div>
                <StartRating rating={vote_average}/>
                <div className={'movieInfoCarouseOverview'}>{overview}</div>
                <Link to={`/movie/${id}`} className={'movieInfoCarouselLink'}>View Details</Link>
            </div>
            <div className={'movieInfoCarouselPoster'}>
                {backdrop_path && <PosterPreview poster={backdrop_path} title={title}/>}
            </div>
        </motion.div>
    );
};

export {MovieInfoUnderCarousel};