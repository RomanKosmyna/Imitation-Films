import profile from "../../images/obi.png";

import styles from "./UserInfo.module.css";
import {useState} from "react";
import profilePhoto from "../../images/obi.png";
import {NavLink} from "react-router-dom";
import ThemeMode from "../ThemeMode/ThemeMode";

const UserInfo = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
      setIsOpen(prevState => !prevState);
    };

    return (
        <div className={styles.userInfoWrapper}>
            <div className={styles.userContainer} onClick={toggle}>
                <img src={profile} alt=""/>
            </div>
            {isOpen && (
                <div className={styles.userDetailsModule}>
                    <button className={styles.closeBtn} onClick={toggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${styles.closeIcon}`}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <ul className={styles.mobNavList}>
                        <li className={styles.listItem}>
                            <h2 className={styles.username}>Obi</h2>
                        </li>
                        <li className={styles.listItem}>
                            <ThemeMode/>
                        </li>
                        <li className={styles.listItem}>
                            <p>Log Out</p>
                        </li>
                    </ul>
                </div>
            )}
        </div>

    );
};

export {UserInfo};