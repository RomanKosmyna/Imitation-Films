import React, {useEffect} from "react";
import {MovieCarousel} from "../MovieCarousel/MovieCarousel";

import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation} from "swiper";
import "swiper/css/navigation";
import "swiper/css/autoplay"
import "swiper/css";

import './PopularMoviesCarousel.css';

import {useDispatch, useSelector} from "react-redux";
import {popularMoviesActions} from "../../../redux";

const PopularMoviesCarousel = () => {
    const {popularMovies: {results}, loading} = useSelector(state => state.popularMovies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(popularMoviesActions.getAllPopular())
    }, [dispatch]);

    return (
        <div className={'mainContainer'}>
            <div className={'title'}>
                <h2>Popular Movies</h2>
            </div>
            <div className={'swiperContainer'}>
                <>
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={70}
                        loop={true}
                        navigation={true}
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        className="mySwiper"
                    >
                        {results && results.map(movie => <SwiperSlide key={movie.id}>
                            <MovieCarousel key={movie.id} movie={movie}/>
                        </SwiperSlide>)}
                    </Swiper>
                </>
            </div>
        </div>
    );
};

export {PopularMoviesCarousel};