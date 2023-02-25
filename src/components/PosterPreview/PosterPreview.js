import {imageBaseURL} from "../../configs/urls";

const PosterPreview = (props) => {
    return (
        <img src={imageBaseURL + props.poster} alt={props.title}/>
    );
};

export {PosterPreview};