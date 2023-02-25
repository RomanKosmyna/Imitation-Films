import {apiService} from "./apiService";
import {urls} from "../configs/urls";
import {useDispatch, useSelector} from "react-redux";
import {Link, useSearchParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {searchActions} from "../redux/actions/movieSearch/movieSearch";
import styles from "../components/Header/SearchBar/SearchBar.module.css";
import {MagnifyingGlassIcon, XMarkIcon} from "@heroicons/react/24/outline";

const searchService = {
    searchMovie: (query) => apiService.get(urls.searchMovie, {params: {query}})
};

export {searchService};



// const SearchBar = () => {
//     const {searchedMovie} = useSelector(state => state.search);
//     const [query, setQuery] = useSearchParams({movie: 'query'});
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//         dispatch(searchActions.searchMovieRequest({movie: query}))
//     },[dispatch, query])
//
//     const inputValue = (e) => {
//         setQuery(e.target.value)
//     };
//
//
//
//     const [filteredData, setFilteredData] = useState([]);
//     const [wordEntered, setWordEntered] = useState('');
//
//     // const handleFilter = (event) => {
//     //     setQuery(event.target.value);
//     //     setWordEntered(setQuery);
//     //     const newFilter = posts.filter(post => {
//     //         return post.title.toLowerCase().includes(searchWord.toLowerCase());
//     //     });
//     //     if (searchWord === '') {
//     //         setFilteredData([])
//     //     }
//     //     else {
//     //         setFilteredData(newFilter);
//     //     }
//     // }
//     console.log(searchedMovie)
//
//     const clearInput = () => {
//         setFilteredData([]);
//         setWordEntered('');
//     }
//
//     return (
//         <div className={styles.Search}>
//             <div className={styles.searchInputs}>
//                 <input type="text" placeholder={'Search for titles, genres, etc...'} onChange={inputValue}/>
//                 <div className={styles.searchIcon}>
//                     {!wordEntered.length ? (
//                         <MagnifyingGlassIcon/>
//                     ) : <XMarkIcon id={styles.clearBtn} onClick={() => clearInput()}/>}
//                 </div>
//             </div>
//
//             {filteredData.length !== 0 && (
//                 <div className={styles.searchResult}>
//                     {filteredData.map(post => <Link className={styles.resultItem} key={post.id} to={'/'}>{post.title}</Link>)}
//                 </div>
//             )}
//
//             {}
//         </div>
//     );
// };
//
// export {SearchBar};