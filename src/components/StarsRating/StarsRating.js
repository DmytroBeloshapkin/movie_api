import React from 'react';
import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRating = ({rating}) => {
    return (
        <div className={'rating'}>
            <StarRatings

                rating={rating}
                starRatedColor="yellow"
                numberOfStars={9}
                name='rating'
                starDimension="15px"
                starSpacing="2px"
            />
        </div>

    );
};

export {StarsRating};