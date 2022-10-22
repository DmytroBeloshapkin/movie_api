import {createSlice} from "@reduxjs/toolkit"
import {createAsyncThunk} from "@reduxjs/toolkit";

import {moviesService} from "../../service";


const initialState = {
    page: null,
    movies: null,
    curentMovies: null,
}

const getAll = createAsyncThunk(
    "moviesSlice/getAll",
    async ({page}) => {
        const {data} = await moviesService.getAllMovie(page)
        return data
    }
)

const searchMovie = createAsyncThunk(
    'moviesSlice/searchMovie',
    async (movie, {rejectedWithValue}) => {
        try {
            const {data} = await moviesService.searchMovies(movie)
            return data
        } catch (e) {
            return rejectedWithValue(e.response.data)
        }
    }
);


const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        getCurentMovies: ((state, action) => {
            state.curentMovies = action.payload.title
        })
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, ((state, action) => {
                const {page, results} = action.payload
                state.pages = page
                state.movies = results
                state.curentMovies = false
            }))
    }
})

const {reducer: moviesReducer, actions: {getCurentMovies}} = moviesSlice

const moviesActions = {
    getAll,
    getCurentMovies,
    searchMovie
}

export {
    moviesReducer,
    moviesActions
}
