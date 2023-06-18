import {FC} from "react";

import styles from "./MovieRuntime.module.css";

interface IRuntime {
    runtime: number;
}

const MovieRuntime: FC<IRuntime> = ({runtime}) => {
    const timeConvert = (runtime) => {
        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;
        return `${hours}h ${minutes}min`;
    }
    const time = timeConvert(runtime);
    return (
        <div className={styles.runtimeContainer}>
            <p className={styles.runtime}>Runtime:</p>
            <span className={styles.time}>
                {time}
            </span>
        </div>
    );
};

export default MovieRuntime;