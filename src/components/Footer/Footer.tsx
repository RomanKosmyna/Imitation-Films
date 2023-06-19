import {Link} from "react-router-dom";

import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.name}>
                <h3>Imitation Films</h3>
            </div>
            <div className={styles.copyright}>
                © 2023 Roman Kosmyna. All Rights Reserved.
            </div>
            <div className={styles.bottom}>
                <Link to={"/"}>Movies</Link>
                <Link to={"/genres"}>Genres</Link>
                <Link to={"/watchlist"}>Watchlist</Link>
                {/*<p>Terms of Service</p>*/}
                {/*<p>About Us</p>*/}
                {/*<p>Contact Us</p>*/}
            </div>
        </div>
    );
};

export {Footer};