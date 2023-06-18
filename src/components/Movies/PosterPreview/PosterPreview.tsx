import {imageBaseURL} from "../../../configs";
import {FC} from "react";

import styles from "./PosterPreview.module.css";

interface IProps {
    poster: string;
    alt: string;
}

const PosterPreview: FC<IProps> = ({poster, alt}) => {

    return (
        <div className={styles.posterContainer}>
            <img src={imageBaseURL + poster} alt={alt}/>
        </div>
    )
};

export {PosterPreview};