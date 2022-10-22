import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

import {UserInfo} from "../UserInfo/UserInfo";
import {Swicher} from "../Swicher/Swicher";

const Header = () => {
    const {movie} = useSelector(state => state.movies)

    return (
        <div className={css.Header}>
            <div className={css.navLink}>
                <button>
                    <NavLink to={'movies'}>Movies</NavLink>
                </button>
                <button>
                    <NavLink to={'genres'}>Genres</NavLink>
                </button>
                <button>
                    <NavLink to={'search'}>Search</NavLink>
                </button>
            </div>
            <div>
                {!movie && <h1>Movie APP</h1>}
                {movie && <h2>{movie}</h2>}
            </div>
            <Swicher/>
            <UserInfo/>
        </div>
    );
};

export {Header};
