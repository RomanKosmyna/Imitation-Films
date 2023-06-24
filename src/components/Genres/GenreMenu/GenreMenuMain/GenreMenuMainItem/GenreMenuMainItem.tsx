import {useAppDispatch, useAppSelector} from "../../../../../hooks";
import {toggleActions} from "../../../../../redux/slices/toggle.slice";
import {genresActions} from "../../../../../redux/slices/genre.slice";
import {useSearchParams} from "react-router-dom";

import styles from "./GenreMenuMainItem.module.css";

interface IProps {
    activeGenre: string;
    genre: IGenre;
    setter: (value: string) => void;
}

interface IGenre {
    id: number;
    name: string;
}

const GenreMenuMainItem = ({activeGenre, genre, setter}: IProps) => {
    const dispatch = useAppDispatch();
    const {genreMenu} = useAppSelector(state => state.toggleReducer);
    const [query] = useSearchParams({page: '1'});
    const {id, name} = genre;

    const chooseGenre = () => {
        setter(name);
        const page = query.get("page") || "1";
        dispatch(genresActions.getMoviesByGenre({ id, page: parseInt(page) }));
        dispatch(toggleActions.toggleGenreMenu(!genreMenu));
    };

    return (
        <li className={styles.genreMenuMainItem}>
            {name === activeGenre && (
                <div className={styles.activeIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${styles.icon}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            )}
            <button className={`${styles.chooseBtn} ${name === activeGenre ? styles.active : ""}`} onClick={chooseGenre}>
                {name}
            </button>
        </li>
    );
};

export default GenreMenuMainItem;