import {FC} from "react";

import styles from "./MovieDate.module.css";

interface IProps {
    date: string;
}

const months = [
    {1: "January"},
    {2: "February"},
    {3: "March"},
    {4: "April"},
    {5: "May"},
    {6: "June"},
    {7: "July"},
    {8: "August"},
    {9: "September"},
    {10: "October"},
    {11: "November"},
    {12: "December"}
];

const MovieDate: FC<IProps> = ({date}) => {
    const splitDate = date.split("-");
    const year = splitDate[0];
    const month = splitDate[1];
    const day = splitDate[2];

    const getDate = (month) => {
        const getMonth = () => {
            if (month !== undefined && month.startsWith("0")) {
                const sliceMonth = month.slice(1);
                const monthObject = months.find((ele, index) => index === sliceMonth - 1);
                const monthValue = Object.values(monthObject);
                return monthValue[0];
            } else {
                const monthObject = months.find((ele, index) => index === month - 1);
                const monthValue = Object.values(monthObject);
                return monthValue[0];
            }
        }

        return `${getMonth()} ${day}, ${year}`;
    }

    const releaseDate = getDate(month);

    return (
        <div className={styles.publishDateContainer}>
            <p className={styles.publishText}>Release Date:</p>
            <span className={styles.publishDate}>{releaseDate}</span>
        </div>
    );
};

export default MovieDate;