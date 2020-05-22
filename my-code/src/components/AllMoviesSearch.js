import React, { useState } from 'react'
import { API_KEY, APP_NAME } from "../constants";
import { useFetch } from "../hooks";
import { Search } from "./Search";
import { AllMovies } from "./AllMovies";

export function AllMoviesSearch() {
    const min = 3; // Min chars count to search
    const [query, setQuery] = useState(null);
    const [searchEnabled, setSearchEnabled] = useState(false); // for useFetch() 

    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;

    // Custom hook to make API requests (activation depends on "searchEnabled" arg)
    const [data, loading] = useFetch(url, query, searchEnabled);
    //
    const [btnDisabled, setBtnDisabled] = useState(true); // Submit button's status

    // Enables & makes the API request
    const search = () => {
        setSearchEnabled(true);
        document.title = `${query.toUpperCase()} | ${APP_NAME}`;
    }
    //

    // Enables/disables submit button & shows chars counter
    function enableBtn(e) {
        setSearchEnabled(false);
        let qry = e.target.value;
        setQuery(qry);
        const hint = document.getElementById("hint");
        (qry.length >= min) ? setBtnDisabled(false) : setBtnDisabled(true);
        hint.innerHTML = `${qry.length}/${min}`;
    }
    //  

    const base = (
        <>
            <Search
                clickFun={search}
                changeFun={enableBtn}
                placeholder="Movies, series,etc..."
                disabled={btnDisabled} />
        </>
    );

    // Actual content to be rendered, based on API request status
    switch (loading) {
        case "loading":
            return (<> {base} <h2>Loading...</h2> </>);
        case "notFound":
            return (<> {base} <h2>No results found...</h2> </>);
        case "error":
            return (<> {base} <h2>There was an error with the server...</h2> </>);
        case "done":
            return (
                <> {base}
                    <h3>Results for {query}:</h3>
                    <AllMovies movies={data.Search} />
                </>
            );
        default:
            return (<> {base} </>);
    }
    //

}