import MovieBackdrop from "../MovieBackdrop/MovieBackdrop";
import ReactPlayer from "react-player";
import {FC} from "react";

import styles from "./MovieTrailer.module.css";

interface IProps {
    videos: IResults;
    backdrop: string;
    title: string;
}

interface IVideo {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    official: boolean;
    published_at: string;
    site: string;
    size: number;
    type: string;
}

interface IResults {
    results: IVideo[];
}

const MovieTrailer: FC<IProps> = ({videos , backdrop, title}) => {
    const {results} = videos;

    const getTrailer = () => {
        return results.map(video => video).find(video => video.name === 'Official Trailer' && video.official);
    }

    const videoValue = getTrailer();
    const youtubeVideo = `https://www.youtube.com/watch?v=${videoValue?.key}`;

    return (
        <>
            {(videos && videoValue?.key) ? (
                <div className={styles.trailerContainer}>
                    <ReactPlayer
                        width={"100%"}
                        height={'100%'}
                        url={youtubeVideo}
                    />
                </div>
            ): <MovieBackdrop backdrop={backdrop} title={title}/>}
        </>
    );
};

export default MovieTrailer;