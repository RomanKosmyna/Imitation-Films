import {Link, NavLink} from "react-router-dom";
import styles from './Header.module.css';
import logo from '../../images/logo.png';
import {SearchBar} from "../SearchBar/SearchBar";
import {MoonIcon} from "@heroicons/react/24/outline";

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
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
                <NavLink to={'/yourfilms'}>Your Films</NavLink>
            </div>

            <div className={styles.searchbarSettings}>
                <SearchBar/>
                <div className={styles.themeBtn}>
                    <MoonIcon/>
                </div>
                <div>USER</div>
            </div>
        </div>
    );
};

export {Header};