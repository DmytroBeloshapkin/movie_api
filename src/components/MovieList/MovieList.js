import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Movie} from "../Movie/Movie";
import {movieActions} from "../../redux/slice/movie.slice/movie.slice";

const MovieList = () => {

    const {movies,loading,page} = useSelector(state => state.movieReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll(page))
    }, [page]);

    return (
        <div>

            <div>
                {
                    loading?<div> </div> : movies?.map(movie => <Movie key={movie.id} movie={movie}/>)
                }
            </div>
        </div>
    );
};

export {MovieList};