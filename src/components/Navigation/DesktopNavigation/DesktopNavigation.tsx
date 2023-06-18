import {NavLink} from "react-router-dom";

import styles from "./DesktopNavigation.module.css";

const DesktopNavigation = () => {
    return (
        <nav className={styles.deskNavContainer}>
            <ul className={styles.desNavList}>
                <li className={styles.listItem}>
                    <NavLink to={'movie'}>
                        Movies
                    </NavLink>
                </li>

                <li className={styles.listItem}>
                    <NavLink to={'/genres'}>
                        Genres
                    </NavLink>
                </li>

                <li className={styles.listItem}>
                    <NavLink to={'/watchlist'}>
                        Your Watchlist
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default DesktopNavigation;