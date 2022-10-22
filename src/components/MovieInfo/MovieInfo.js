import React from 'react';
import {useLocation} from "react-router-dom";
import {StarsRating} from "../StarsRating/StarsRating";

import css from './MovieInfo.module.css'

import {PosterPreview} from "../PosterPreview/PosterPreview";

const MovieInfo = () => {

    const {state} = useLocation();
    const {adult, original_language, overview, release_date, title, vote_average} = state


    return (
        <div className={css.MovieInfo}>
            <div>
                <PosterPreview/>
            </div>
            <div>
                <h1>{title}</h1>
                {adult?  <h4>Category: adult</h4>  : <h4>Category: kids</h4>}
                <h4>Release date:{release_date}</h4>
                <h4>Original language: {original_language}</h4>
                <h2>{overview}</h2>
                <StarsRating rating={vote_average}/>
                <h3>Rating: {vote_average}</h3>
            </div>
        </div>
    );
};

export {MovieInfo};