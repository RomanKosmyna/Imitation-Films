import GenreMenuMainItem from "./GenreMenuMainItem/GenreMenuMainItem";
import {movieService} from "../../../../services";
import {useEffect, useState} from "react";

import styles from "./GenreMenuMain.module.css";

interface IProps {
    activeGenre: string;
    setter: (value: string) => void;
}

const GenreMenuMain = ({activeGenre, setter}: IProps) => {
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