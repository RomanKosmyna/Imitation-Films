import {Outlet} from "react-router-dom";

import {ButtonScrollToTop, Header} from "../../components";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <ButtonScrollToTop/>
        </div>
    );
};

export {MainLayout};