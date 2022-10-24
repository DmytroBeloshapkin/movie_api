import React, {useRef} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'

import {UserInfo} from "../UserInfo/UserInfo";

const Header = () => {

    const colorChange = useRef(null);

    const clickMe = () => {
        if (colorChange.current.style.backgroundColor === "gray") {
            colorChange.current.style.backgroundColor = "#0080ff";
        } else {
            colorChange.current.style.backgroundColor = "gray";
        }
    };

    return (

        <div className={css.Header} ref={colorChange}>

            <div className={css.navLink}>
                <button>
                    <NavLink to={'movies'}>Movies</NavLink>
                </button>
                <button>
                    <NavLink to={'genres'}>Genres</NavLink>
                </button>
                {/*<button>*/}
                {/*    <NavLink to={'search'}>Search</NavLink>*/}
                {/*</button>*/}
            </div>
            <div>
                <h1>Movie APP</h1>
            </div>
            <UserInfo/>
            <input type="checkbox" onClick={clickMe} ref={colorChange}/>
        </div>
    );
};

export {Header};
