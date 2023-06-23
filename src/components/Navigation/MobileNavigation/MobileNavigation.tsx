import {useAppDispatch, useAppSelector} from "../../../hooks";
import {toggleActions} from "../../../redux/slices/toggle.slice";
import {NavLink} from "react-router-dom";
import profilePhoto from "../../../images/obi.png";
import ThemeMode from "../../ThemeMode/ThemeMode";

import styles from "./MobileNavigation.module.css";
import {useEffect} from "react";

const MobileNavigation = () => {
        const dispatch = useAppDispatch();
        const {toggleMobNavigation} = useAppSelector(state => state.toggleReducer);

        const toggle = () => {
            dispatch(toggleActions.toggleMobNavigation(!toggleMobNavigation));
        };

        return (
            <div className={styles.mobNavWrapper}>
                <nav className={styles.mobNavContainer}>
                    <ul className={styles.mobNavList}>
                        <li className={styles.listItem}>
                            <img src={profilePhoto} alt={"Profile"}/>
                            <h2 className={styles.username}>Obi</h2>
                        </li>
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
                                Watchlist
                            </NavLink>
                        </li>
                        <li className={styles.listItem}>
                            <ThemeMode/>
                        </li>
                        <li className={styles.listItem}>
                            <p>Log Out</p>
                        </li>
                    </ul>
                </nav>
                <div className={styles.closeContainer} onClick={toggle}>
                    <button className={styles.closeBtn}></button>
                </div>
            </div>
        );
    };

export default MobileNavigation;