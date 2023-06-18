import StarRatings from "react-star-ratings/build/star-ratings";

const StartRating = (props) => {
    return (
        <div style={{color: 'white'}}>
            <StarRatings
                rating={props.rating}
                starDimension="17px"
                starSpacing="2px"
                starRatedColor="yellow"
                numberOfStars={10}
                name='rating'
            />
        </div>
    );
};

export {StartRating};