import {NoSymbolIcon} from "@heroicons/react/24/solid";

import styles from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <NoSymbolIcon className={styles.icon}/>
            <h1>404</h1>
            <h1>Not Found</h1>
        </div>
    );
};

export {NotFound};