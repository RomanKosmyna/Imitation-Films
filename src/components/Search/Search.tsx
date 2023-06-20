import {searchActions} from "../../redux/slices/search.slice";
import {useAppDispatch} from "../../hooks";
import {useRef, useState} from "react";

import styles from "./Search.module.css";

const Search = () => {
    const dispatch = useAppDispatch();
    const inputRef = useRef<HTMLInputElement>();
    const [value, setValue] = useState<string>("");

    const getInputValue = () => {
        const inputValue = inputRef.current?.value || "";
        setValue(inputValue);
        if (inputValue !== "") {
            setTimeout(async () => {
                await dispatch(searchActions.searchMovie({movie: inputValue}));
            }, 1000);
        } else {
            dispatch(searchActions.searchMovie([]));
        }
    };

    const clearInput = () => {
        if (inputRef.current) {
            inputRef.current.value = "";
        }
        dispatch(searchActions.searchMovie([]));
        setValue("");
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
                <div className={styles.clearInput} onClick={clearInput}>
                    {value !== "" && (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className={`w-6 h-6 ${styles.clearIcon}`}>
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;