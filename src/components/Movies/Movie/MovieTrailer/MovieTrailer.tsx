import ReactPlayer from "react-player";

import styles from "./MovieTrailer.module.css";
import {FC} from "react";
import MovieBackdrop from "../MovieBackdrop/MovieBackdrop";

interface IProps {
    video: object;
    backdrop: string;
    title: string;
}

const MovieTrailer: FC<IProps> = ({video, backdrop, title}) => {
    const {results} = video;

    const getTrailer = () => {
        return results.map(video => video).find(video => video.name === 'Official Trailer' && video.official === true);
    }

    const videoValue = getTrailer();
    const youtubeVideo = `https://www.youtube.com/watch?v=${videoValue?.key}`;

    return (
        <>
            {(video && videoValue?.key) ? (
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