import ReactPlayer from 'react-player'
import trailer from '../../images/trailer.png';

import './Trailer.css';

const Trailer = ({video: {results}}) => {
    const getTrailer = () => {
        return results.map(video => video).find(video => video.name === 'Official Trailer' && video.official === true);
    }

    const videoValue = getTrailer();

    const video = `https://www.youtube.com/watch?v=${videoValue?.key}`;
    return (
        <div className={'container'}>
            {videoValue?.key  ? <ReactPlayer
                height={'100%'}
                url={video}/>: <img src={trailer} alt={video.title}/>}
        </div>
    );
};

export {Trailer};