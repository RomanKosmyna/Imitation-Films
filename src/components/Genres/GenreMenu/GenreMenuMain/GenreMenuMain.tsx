import styles from "./GenreMenuMain.module.css";
import {useEffect, useState} from "react";
import {movieService} from "../../../../services";
import GenreMenuMainItem from "./GenreMenuMainItem/GenreMenuMainItem";

const GenreMenuMain = ({activeGenre, setter}) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        movieService.getAllGenres().then(({data}) => setGenres(data.genres));
    }, []);

    return (
        <ul className={styles.genreMain}>
            {genres.map(genre => <GenreMenuMainItem key={genre.id} activeGenre={activeGenre} genre={genre} setter={setter}/>)}
        </ul>
    );
};

export default GenreMenuMain;