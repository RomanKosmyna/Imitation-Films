import {FC} from "react";

import styles from "./Genre.module.css";

interface IProps {
    name: string;
    index: number;
}

type IColor = Record<number, string>;

const colorMapping: IColor = {
    0: "purple",
    1: "green",
    2: "orange",
    3: "blue"
};

const Genre: FC<IProps> = ({name, index}) => {
    const color = index % Object.keys(colorMapping).length;

    return (
        <span className={`${styles.tag} ${styles[colorMapping[color]]}`}>
            {name}
        </span>
    );
};

export default Genre;