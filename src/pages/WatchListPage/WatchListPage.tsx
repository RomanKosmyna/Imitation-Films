import {Watchlist} from "../../components/Watchlist";
import {useAppDispatch} from "../../hooks";
import {useEffect} from "react";
import {toggleActions} from "../../redux/slices/toggle.slice";

import styles from "../../styles/page.module.css";

const WatchListPage = () => {
    const dispatch =useAppDispatch();

    useEffect(() => {
        dispatch(toggleActions.toggleMobNavigation(false));
    },[dispatch]);

    return (
        <main className={styles.page}>
            <Watchlist/>
        </main>
    );
};

export {WatchListPage};