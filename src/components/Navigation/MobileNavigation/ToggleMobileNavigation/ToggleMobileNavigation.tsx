import {useAppDispatch, useAppSelector} from "../../../../hooks";
import {toggleActions} from "../../../../redux/slices/toggle.slice";

import styles from "./ToggleMobileNavigation.module.css";

const ToggleMobileNavigation = () => {
    const dispatch = useAppDispatch();
    const {toggleMobNavigation} = useAppSelector(state => state.toggleReducer);

    const toggle = () => {
        dispatch(toggleActions.toggleMobNavigation(!toggleMobNavigation));
    };

    return (
        <>
            {!toggleMobNavigation &&
                <div className={styles.toggleMobNavContainer}>
                    <span className={`${styles.toggleMenu} ${toggleMobNavigation ? styles.active : ""}`}
                          onClick={toggle}></span>
                </div>
            }
        </>
    );
};

export default ToggleMobileNavigation;