import MobileNavigationWrapper
    from "../../components/Navigation/MobileNavigation/MobileNavigationWrapper/MobileNavigationWrapper";
import {Outlet} from "react-router-dom";
import {Footer, Header} from "../../components";

import styles from "./MainLayout.module.css";

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