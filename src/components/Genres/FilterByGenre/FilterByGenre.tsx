import styles from "./FilterByGenre.module.css";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {toggleActions} from "../../../redux/slices/toggle.slice";

const FilterByGenre = () => {
    const dispatch = useAppDispatch();
    const {genreMenu} = useAppSelector(state => state.toggleReducer);

    const toggleMenu = () => {
        dispatch(toggleActions.toggleGenreMenu(!genreMenu));
    };

    return (
        <div className={styles.filterContainer}>
            <button className={styles.filterBtn} onClick={toggleMenu}>Select Genre</button>
        </div>
    );
};

export default FilterByGenre;