import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../../service/movies.service";

const initialState  = {
    movie: [],
    loading: false,
    page: 1
}

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (page, {rejectedWithValue}) =>{
        try{
            const {data} = await moviesService.getAll(page)
            return data.results;
        } catch (e){
            rejectedWithValue(e.response.data)
        }

    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        nextPage: (state, action) => {
            if (state.page < 500) state.page += action.payload;
        },
        prevPage: (state, action) => {
            if (state.page > 1) state.page -= action.payload;
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.loading = false
            })
            .addCase(getAll.pending, (state) => {
                state.loading = true
            })

})

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAll
}

export {
    movieReducer,
    movieActions
}