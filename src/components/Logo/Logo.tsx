import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../images/logo.png";

import styles from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <Link to={"/"} className={styles.logoWrapper}>
                <img src={logo} alt="Imitation Films website logo, with an octopus pictured on it"/>
            </Link>
        </div>
    );
};

export default Logo;