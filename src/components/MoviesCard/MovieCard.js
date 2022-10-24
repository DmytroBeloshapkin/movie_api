import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {StarsRating} from "../StarsRating/StarsRating";

import css from './MovieCard.module.css'

import {moviesActions} from "../../redux/slice/movie.slice";
import {img} from "../../config";


const MoviesCard = ({movie}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {title, vote_average, poster_path} = movie;

    const link = (img + poster_path)


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
                    <StarsRating rating={vote_average}/>
                    <h3>Rating: {vote_average}</h3>
                </div>
            </div>

        </div>
    );
};

export {MoviesCard};
