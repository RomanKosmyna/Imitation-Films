import {searchActions} from "../../redux/slices/search.slice";
import {useAppDispatch} from "../../hooks";
import {useRef} from "react";

import styles from "./Search.module.css";

const Search = () => {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>();

    const getInputValue = () => {
        const value = inputRef.current?.value;

        if (value?.length !== 0) {
            setTimeout(async () => {
                await dispatch(searchActions.searchMovie({movie: value}));
            }, 1000);
        } else {
            dispatch(searchActions.searchMovie([]));
        }
    };

    return (
        <div className={styles.searchContainer}>
            <div className={styles.inputContainer}>
                <div className={styles.inputIconContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className={`w-6 h-6 ${styles.searchIcon}`}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                    </svg>
                </div>
                <input
                    type="search"
                    placeholder={"Search..."}
                    autoComplete={"off"}
                    autoCorrect={"off"}
                    ref={inputRef}
                    onChange={getInputValue}
                />
                <div className={styles.clearInput}></div>
            </div>
        </div>
    );
};

export default Search;