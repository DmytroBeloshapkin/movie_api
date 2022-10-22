import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import css from './MovieListCard.module.css'

import {moviesActions} from "../../redux/slice/movie.slice";
import {MoviesCard} from "../MoviesCard/MovieCard";
import {Pagination} from "../Pagination/Pagination";

const MoviesListCard = () => {

    const {movies} = useSelector(state => state.movies);

    const [query] = useSearchParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAll({page: query.get('page')}))
    }, [query])


    return (
        <div>
            <Pagination/>
            <div className={css.MovieListCard}>
                {movies && movies.map(movie => <MoviesCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export {MoviesListCard};
