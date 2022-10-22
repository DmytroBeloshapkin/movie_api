import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../service";

let initialState = {
    genres: [],
    genresError: null
};

let getGenres = createAsyncThunk(
    'genresSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            let {data} = await moviesService.getGenres();
            return data.genres;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

let genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getGenres.fulfilled, (state, action) => {
                state.genres = action.payload;
            })
            .addCase(getGenres.rejected, (state, action) => {
                state.genresError = action.payload;
            })
});

let {reducer: genresReducer} = genresSlice;

let genresActions = {
    getGenres
};

export {genresReducer, genresActions};