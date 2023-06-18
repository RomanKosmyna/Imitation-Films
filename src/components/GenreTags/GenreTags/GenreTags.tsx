import {genresActions} from "../../../redux/slices/genre.slice";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import GenreTag from "../GenreTag/GenreTag";
import {FC, useEffect} from "react";

import styles from "./GenreTags.module.css";

interface IProps {
    genre: number[];
}

const GenreTags: FC<IProps> = ({genre}) => {
    const dispatch = useAppDispatch();
    const {genres} = useAppSelector(state => state.genresReducer);
    
    return (
        <div className={styles.genreTagsContainer}>
            {genre?.map((genre, index) => (
                <GenreTag key={index} genre={genre}/>
            ))}

        </div>
    );
};

export default GenreTags;