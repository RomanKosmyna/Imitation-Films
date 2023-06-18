import MovieInfo from "../../components/Movies/MovieInfo/MovieInfo";

import styles from "../../styles/page.module.css";

const MoviePage = () => {
    return (
        <main className={styles.page}>
            <MovieInfo/>
        </main>
    );
};

export {MoviePage};