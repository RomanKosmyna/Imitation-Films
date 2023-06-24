import {useSearchParams} from "react-router-dom";

import styles from "./MoviePagination.module.css";

const MoviePagination = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page: string = query.get("page");

    const previousPage = () => {
        const currentPage: string = query.get("page");

        if (currentPage > 1) {
            const prevPage: number = parseInt(currentPage) - 1;
            query.set("page", prevPage.toString());
            setQuery(query);
        }
    };

    const nextPage = () => {
      const currentPage = query.get("page");
      const nextPage = parseInt(currentPage) + 1;
      query.set("page", nextPage.toString());
      setQuery(query);
    };

    return (
        <div className={styles.paginationContainer}>
            {page > 1 && <button className={styles.changePage} onClick={previousPage}>{page - 1}</button>}
            <button className={styles.current}>{page}</button>
            <button className={styles.changePage} onClick={nextPage}>{+page + 1}</button>
        </div>
    );
};

export default MoviePagination;