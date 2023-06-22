import {useSearchParams} from "react-router-dom";

import styles from "./GenrePagination.module.css";

const GenrePagination = () => {
    const [genreQuery, setGenreQuery] = useSearchParams({page: '1'});
    const page = genreQuery.get("page");

    const previousPage = () => {
        const currentPage = genreQuery.get("page");
        if (currentPage > 1) {
            const prevPage = parseInt(currentPage) - 1;
            genreQuery.set("page", prevPage.toString());
            setGenreQuery(genreQuery);
        }
    };

    const nextPage = () => {
      const currentPage = genreQuery.get("page");
      const nextPage = parseInt(currentPage) + 1;
        genreQuery.set("page", nextPage.toString());
        setGenreQuery(genreQuery);
    };

    return (
        <div className={styles.paginationContainer}>
            {page > 1 && <button className={styles.changePage} onClick={previousPage}>{page - 1}</button>}
            <button className={styles.current}>{page}</button>
            <button className={styles.changePage} onClick={nextPage}>{+page + 1}</button>
        </div>
    );
};

export default GenrePagination;