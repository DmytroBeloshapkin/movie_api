import {Routes, Route, Navigate} from "react-router-dom";

import css from './App.module.css'

import {MainLayout} from "./layout/MainLayout";
import {MoviesListPage, MoviePage, GenresPage, SearchPage} from "./pages";

function App() {
    return (
        <div className={css.App}>

            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>
                    <Route path={'movies'} element={<MoviesListPage/>}/>
                    <Route path={'movie'} element={<MoviePage/>}/>
                    <Route path={'genres'} element={<GenresPage/>}/>
                    <Route path={'search'} element={<SearchPage/>}/>
                </Route>
            </Routes>
      </div>
    );
}

export default App;
