import {imageBaseURL} from "../../../configs";

import styles from './MovieCarousel.module.css';
import {useDispatch} from "react-redux";
import {clickedSliderActions} from "../../../redux";

const MovieCarousel = ({movie}) => {
    const {title, poster_path} = movie;
    const dispatch = useDispatch();

    return (
        <div>
            <div className={styles.container} onClick={() => dispatch(clickedSliderActions.clicked(movie))}>
                <div className={styles.carouselItem}>
                    <div className={styles.carouselItemImage}>
                        <img src={imageBaseURL + poster_path} alt={title}/>
                    </div>
                    <div className={styles.carouselItemInfo}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MovieCarousel};