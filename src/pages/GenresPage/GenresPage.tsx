import {useAppDispatch} from "../../hooks";
import {useEffect} from "react";
import {toggleActions} from "../../redux/slices/toggle.slice";
import {searchActions} from "../../redux/slices/search.slice";
import Genres from "../../components/Genres/Genres";

import styles from "../../styles/page.module.css";

const GenresPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(toggleActions.toggleMobNavigation(false));
        dispatch(searchActions.searchMovie({movie: ""}));
    }, [dispatch]);

    return (
        <div className={styles.page}>
            <Genres/>
        </div>
    );
};

export {GenresPage};