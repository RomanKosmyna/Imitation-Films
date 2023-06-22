import {NotFound} from "../../components/NotFound";

import styles from "../../styles/page.module.css";

const NotFoundPage = () => {
    return (
        <div className={styles.page}>
            <NotFound/>
        </div>
    );
};

export {NotFoundPage};