import {FC} from "react";
import {Link} from "react-router-dom";

import styles from "./MovieViewDetails.module.css";

interface IProps {
    id: number;
}

const MovieViewDetails: FC<IProps> = ({id}) => {

    return (
        <div className={styles.viewDetailsContainer}>
            <Link to={`/movie/${id.toString()}`} className={styles.viewLink}>View Details</Link>
        </div>
    );
};

export default MovieViewDetails;