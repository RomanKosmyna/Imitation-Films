import {useAppSelector} from "../../../../hooks";
import MobileNavigation from "../MobileNavigation";
import {useEffect} from "react";

const MobileNavigationWrapper = () => {
    const {toggleMobNavigation} = useAppSelector(state => state.toggleReducer);

    useEffect(() => {
            toggleMobNavigation ?
                document.body.classList.add("no-overflow") :
                document.body.classList.remove("no-overflow");
        }, [toggleMobNavigation]
    );

    return (
        <>
            {toggleMobNavigation && <MobileNavigation/>}
        </>
    );
};

export default MobileNavigationWrapper;