import {FC} from 'react';
import Genre from "./Genre/Genre";

import styles from "./MovieGenre.module.css";

interface IGenres {
    genres: object;
}

const MovieGenre: FC<IGenres> = ({genres}) => {

    return (
        <>
            {genres &&
                <div className={styles.genreContainer}>
                    {genres.map((genre, index) => (
                        <Genre key={genre.id} name={genre.name} index={index}/>
                    ))}
                </div>}
        </>
    );
};

export default MovieGenre;