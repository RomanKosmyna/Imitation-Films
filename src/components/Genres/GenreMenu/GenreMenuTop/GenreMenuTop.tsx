import styles from "./GenreMenuTop.module.css";
import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {toggleActions} from "../../../../redux/slices/toggle.slice";

const GenreMenuTop = () => {
    const dispatch = useAppDispatch();
    const {genreMenu} = useAppSelector(state => state.toggleReducer);

    const closeMenu = () => {
      dispatch(toggleActions.toggleGenreMenu(!genreMenu));
    };

    return (
        <div className={styles.genreHeader}>
            <h4>Filter by Genre</h4>
            <button className={styles.closeBtn} onClick={closeMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${styles.closeIcon}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
        </div>
    );
};

export default GenreMenuTop;