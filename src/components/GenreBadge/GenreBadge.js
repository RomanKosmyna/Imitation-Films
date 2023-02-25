import styles from './GenreBadge.module.css';
import {Link} from "react-router-dom";

const GenreBadge = ({genre}) => {
    const {id,name} = genre;
    return (
        <div className={styles.genreBadge}>
            <Link to={`/genres/${id}?${name}`} state={{id: genre.id.toString(), name: name}}>{name}</Link>
        </div>
    );
};

export {GenreBadge};