import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "./slice/movie.slice";
import {genresReducer} from "./slice/genre.slice";

const rootReducer = combineReducers({
    movies: moviesReducer,
    genres: genresReducer
})

const store = configureStore({
    reducer:rootReducer
})

export {store};
