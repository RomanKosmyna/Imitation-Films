import {useAppSelector} from "../../../../hooks";
import MobileNavigation from "../MobileNavigation";

const MobileNavigationWrapper = () => {
    const {toggleMobNavigation} = useAppSelector(state => state.toggleReducer);

    return (
        <>
            {toggleMobNavigation && <MobileNavigation/>}
        </>
    );
};

export default MobileNavigationWrapper;