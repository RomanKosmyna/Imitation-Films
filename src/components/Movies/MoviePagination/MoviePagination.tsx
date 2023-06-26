import {useSearchParams} from "react-router-dom";

import styles from "./MoviePagination.module.css";

const MoviePagination = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const page: string | null = query.get("page");

    const previousPage = () => {
        const currentPage: string | null = query.get("page");

        if (currentPage && parseInt(currentPage) > 1) {
            const prevPage = parseInt(currentPage) - 1;
            query.set("page", prevPage.toString());
            setQuery(query);
            window.scrollTo(0, 0);
        }
    };

    const nextPage = () => {
        const currentPage: string | null = query.get("page");

        if (currentPage && !isNaN(+currentPage)) {
            const nextPage = parseInt(currentPage) + 1;
            query.set("page", nextPage.toString());
            setQuery(query);
            window.scrollTo(0, 0);
        }
    };

    return (
        <div className={styles.paginationContainer}>
            {page && +page > 1 && (
                <button className={styles.changePage} onClick={previousPage}>
                    {+page - 1}
                </button>
            )}
            <button className={styles.current}>{page}</button>
            {page && <button className={styles.changePage} onClick={nextPage}>{+page + 1}</button>}
        </div>
    );
};

export default MoviePagination;