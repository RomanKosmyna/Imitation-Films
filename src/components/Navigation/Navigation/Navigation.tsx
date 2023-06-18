import ToggleMobileNavigation from "../MobileNavigation/ToggleMobileNavigation/ToggleMobileNavigation";
import DesktopNavigation from "../DesktopNavigation/DesktopNavigation";
import {useTrackWidth} from "../../../hooks";

const Navigation = () => {
    const innerWidth = useTrackWidth();
    
    return (
        <>
            {innerWidth < 768 ? <ToggleMobileNavigation/> : <DesktopNavigation/>}
        </>
    );
};

export default Navigation;