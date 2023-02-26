import {SearchMovie} from "../SearchBar/SearchBar";
import {UserInfo} from "../../UserInfo/UserInfo";
import {Link, NavLink} from "react-router-dom";
import logo from '../../../images/logo.png';

import styles from './Header.module.css';

const Header = () => {

    return (
        <div className={styles.Header}>
            <div className={styles.logo}>
                <img className={styles.logoImg} src={logo} alt='Imitation Films website logo, with an octopus pictured on it'/>
                <Link to={'/'}>
                    <h1>Imitation Films</h1>
                </Link>
            </div>

            <div className={styles.navigate}>
                <NavLink to={'movie'}>
                    Movies
                </NavLink>

                <NavLink to={'/genres'}>
                    Genres
                </NavLink>

                <NavLink to={'/watchlist'}>
                    Your Watchlist
                </NavLink>
            </div>

            <div className={styles.searchbarSettings}>
                <SearchMovie/>

                <div className={styles.profileMenu}>
                    <UserInfo/>
                </div>
            </div>
        </div>
    );
};

export {Header};