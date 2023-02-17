import React, {useEffect, useState} from 'react';
import styles from './SearchBar.module.css';
import {MagnifyingGlassIcon, XMarkIcon} from "@heroicons/react/24/outline";
import axios from "axios";
import {Link} from "react-router-dom";

const SearchBar = () => {
    const baseURL = 'https://jsonplaceholder.typicode.com';
    const apiService = axios.create({baseURL});

    const [posts, setPosts] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState('');

    useEffect(() => {
        apiService.get('/posts').then(({data}) => setPosts(data))
    },[])

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = posts.filter(post => {
            return post.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === '') {
            setFilteredData([])
        }
        else {
            setFilteredData(newFilter);
        }
    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered('');
    }

    return (
        <div className={styles.Search}>
            <div className={styles.searchInputs}>
                <input type="text" placeholder={'Search for titles, genres, etc...'} value={wordEntered} onChange={handleFilter}/>
                <div className={styles.searchIcon}>
                    {filteredData.length === 0 ? (
                        <MagnifyingGlassIcon/>
                    ) : <XMarkIcon id={styles.clearBtn} onClick={() => clearInput()}/>}
                </div>
            </div>

            {filteredData.length !== 0 && (
                <div className={styles.searchResult}>
                    {filteredData.slice(0, 10).map(post => <Link className={styles.resultItem} key={post.id} to={'/'}>{post.title}</Link>)}
                </div>
            )}

            {}
        </div>
    );
};

export {SearchBar};