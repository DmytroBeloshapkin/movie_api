import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import css from './Genere.module.css'

import {genresActions} from "../../redux/slice/genre.slice";


const Genre = () => {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresActions.getGenres())
        console.log(genres);
    }, [])


    return (
        <div className={css.Genere}>
            {genres.map((item) => <li key={item.id}> {item.name}</li>)}
        </div>
    );
};


export {Genre};








