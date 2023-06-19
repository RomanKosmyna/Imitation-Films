// import {MovieListCard} from "../../Movies/MovieListCard/MovieListCard";
// import {useParams, useSearchParams} from "react-router-dom";
// import {genresActions} from "../../../redux";
// import {useDispatch, useSelector} from "react-redux";
// import {useEffect} from "react";
//
// import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/24/solid";
//
// import styles from './Genre.module.css';

const Genre = () => {
    // const {id} = useParams();
    // const {moviesByGenre, currentPage, totalPages} = useSelector(state => state.genres)
    // const dispatch = useDispatch();
    // const [query, setQuery] = useSearchParams({page: '1'});
    //
    // useEffect(() => {
    //     dispatch(genresActions.getMoviesByGenre( {id, page: query.get('page')}))
    // },[id, dispatch, query]);

    return (
        <div>

        </div>
        // <div className={styles.mainContainer}>
        //     <div className={styles.movieContainer}>
        //         {moviesByGenre && moviesByGenre.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
        //     </div>
        //
        //     <div className={'menuBtn'}>
        //         <button disabled={currentPage <= 1} onClick={() => setQuery(query => ({page: +query.get('page')-1}))}>
        //             <ArrowLeftIcon/>
        //         </button>
        //         <button disabled={currentPage >= totalPages} onClick={() => setQuery(query => ({page: +query.get('page')+1}))}>
        //             <ArrowRightIcon/>
        //         </button>
        //     </div>
        // </div>
    );
};

export {Genre};