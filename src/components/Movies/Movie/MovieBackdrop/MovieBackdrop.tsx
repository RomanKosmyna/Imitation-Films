import {FC} from "react";

import styles from "./MovieBackdrop.module.css";
import {imageBaseURL} from "../../../../configs";

interface IProps {
    backdrop: string;
    title: string;
}

const MovieBackdrop: FC<IProps> = ({backdrop, title}) => {

    return (
        <div className={styles.backdropContainer}>
            <img src={imageBaseURL + backdrop} alt={title}/>
        </div>
    );
};

export default MovieBackdrop;