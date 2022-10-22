import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import css from './MovieCard.module.css'

import {moviesActions} from "../../redux/slice/movie.slice";
import {img} from "../../config";
import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadge} from "../GenreBadge/GenreBadget";




const MoviesCard = ({movie}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {title, vote_average, poster_path, genre_ids} = movie;

    const link = (img+poster_path)


    const movieInfo = () => {
        dispatch(moviesActions.getCurentMovies({title}))
        navigate(`/movie`, {state: movie})
    }
    return (
        <div className={css.MovieCard}>

        <div onClick={movieInfo}>
            <img src={link} alt={title}/>
            <div>
                <h3>{title}</h3>
                <StarsRating  rating={vote_average}/>
                <h3>Rating: {vote_average}</h3>
                <h3>{genre_ids}</h3>
                {/*<GenreBadge genres={genres}/>*/}

            </div>
        </div>

        </div>
    );
};

export {MoviesCard};
