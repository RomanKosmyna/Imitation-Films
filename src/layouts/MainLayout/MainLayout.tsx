
import {Outlet} from "react-router-dom";
import {Footer} from "../../components/Footer";
import {Header} from "../../components/Header/Header";

import styles from "./MainLayout.module.css";
import MobileNavigationWrapper
    from "../../components/Navigation/MobileNavigation/MobileNavigationWrapper/MobileNavigationWrapper";

const MainLayout = () => {
    return (
        <div className={styles.layout}>
            <Header/>
            <MobileNavigationWrapper/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayout};