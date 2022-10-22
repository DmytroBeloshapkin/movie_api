import React from "react";

import {useSearchParams} from "react-router-dom";

const Pagination = () => {

    const [query, setQuery] = useSearchParams({page: '1', with_genres: ''});

    query.get('page');
    query.get('with_genres');

    const prevPage = () => {
        let prevPage = query.get('page');
        prevPage = +prevPage - 1
        setQuery({page: prevPage.toString()})

    }
    const nextPage = () => {
        const nextPage = +query.get('page') + 1;
        setQuery({page: `${nextPage}`})
    }

    return (
        <div>
            <div>
                <button onClick={prevPage}>previos page</button>
                <button onClick={nextPage}>next page</button>
            </div>
        </div>
    );
};

export {Pagination};