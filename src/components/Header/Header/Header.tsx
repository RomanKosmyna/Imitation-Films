import React from 'react';
import Navigation from "../../Navigation/Navigation/Navigation";
import {useScrollTracker} from "../../../hooks";
import Logo from "../../Logo/Logo";

import styles from './Header.module.css';

const Header = () => {
    const scroll = useScrollTracker();

    return (
        <header className={`${styles.header} ${scroll > 0 && styles.backdropFilter}`}>
            <Logo/>
            <Navigation/>
            {/*<DesktopNavigation/>*/}

            {/*<div className={styles.searchbarSettings}>*/}
            {/*    <SearchMovie/>*/}

            {/*    <div className={styles.profileMenu}>*/}
            {/*        <UserInfo/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </header>
    );
};

export {Header};