import styles from "./MovieRemoveWatchlist.module.css";

interface IProps {
    title: string;
    onRemove: object;
}

const MovieRemoveWatchlist = ({title, onRemove}: IProps) => {

    const removeFromWatchlist = () => {
        onRemove();
    };

    return (
            <button
                type={"button"}
                className={styles.removeBtn}
                onClick={removeFromWatchlist}
            >
                Remove
            </button>
    );
};

export default MovieRemoveWatchlist;