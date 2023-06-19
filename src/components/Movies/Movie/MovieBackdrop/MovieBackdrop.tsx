import {FC} from "react";
import {imageBaseURL} from "../../../../configs";

import styles from "./MovieBackdrop.module.css";

interface IProps {
    backdrop: string;
    title: string;
}

const MovieBackdrop: FC<IProps> = ({backdrop, title}) => {

    return (
        <>
            {backdrop !== null && (
                <div className={styles.backdropContainer}>
                    <img src={imageBaseURL + backdrop} alt={title}/>
                </div>
            )}
        </>
    );
};

export default MovieBackdrop;