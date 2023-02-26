import {imageBaseURL} from "../../configs";

const PosterPreview = (props) => {
    return (
        <img src={imageBaseURL + props.poster} alt={props.title}/>
    );
};

export {PosterPreview};