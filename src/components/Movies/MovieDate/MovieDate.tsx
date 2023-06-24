import {FC} from "react";

import styles from "./MovieDate.module.css";

interface IProps {
    date: string;
}

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const MovieDate: FC<IProps> = ({date}) => {
    const splitDate = date.split("-");
    const year = splitDate[0];
    const month = splitDate[1];
    const day = splitDate[2];

    const getDate = (month: string | undefined) => {
        const getMonth = () => {
            if (month !== undefined) {
                const numericMonth = parseInt(month);
                if (numericMonth >= 1 && numericMonth <= 12) {
                    return months[numericMonth - 1];
                }
            }
            return "";
        };

        return `${getMonth()} ${day}, ${year}`;
    };

    const releaseDate = getDate(month);

    return (
        <div className={styles.publishDateContainer}>
            <p className={styles.publishText}>Release Date:</p>
            <span className={styles.publishDate}>{releaseDate}</span>
        </div>
    );
};

export default MovieDate;