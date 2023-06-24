import styles from "./MovieRemoveWatchlist.module.css";

interface IProps {
    title: string;
    onRemove: () => void;
}

const MovieRemoveWatchlist = ({title, onRemove}: IProps) => {

    const removeFromWatchlist = () => {
        onRemove();
    };

    return (
            <div className={styles.removeBtnContainer}>
                <button
                    type={"button"}
                    className={styles.removeBtn}
                    onClick={removeFromWatchlist}
                >
                    Remove
                </button>
            </div>
    );
};

export default MovieRemoveWatchlist;