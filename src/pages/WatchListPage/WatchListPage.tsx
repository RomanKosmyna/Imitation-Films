import {Watchlist} from "../../components/Watchlist";

import styles from "../../styles/page.module.css";

const WatchListPage = () => {
    return (
        <main className={styles.page}>
            <Watchlist/>
        </main>
    );
};

export {WatchListPage};