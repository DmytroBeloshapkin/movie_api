import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {movieReducer} from "./movie.slice/movie.slice";



const rootReducer = combineReducers({
    movieReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
})

export {
    setupStore
}