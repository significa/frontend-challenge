import React, { useEffect, useState } from 'react'
import { API_KEY, APP_NAME } from "../constants";
import { useFetch } from "../hooks";
import { Search } from "./Search";
import { AllMovies } from "./AllMovies";

export function AllMoviesSearch() {
    
    const min = 3; // Min chars count to search
    const [query, setQuery] = useState(null);
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;
    // Custom hook to make API requests (disabled while query === null)
    const [data, loading] = useFetch(url, query);
    //
    const [disabled, setDisabled] = useState(true); // Submit button's status
    let res;
    const q = document.getElementById("q");

    // Keeps focus on input field
    useEffect(() => {
        document.getElementById("q").focus();
    }, [query])
    //

    // Enables & makes the API request
    const search = () => {
        setQuery(q.value);
        document.title = `${q.value.toUpperCase()} | ${APP_NAME}`;
    }
    //

    // Enables/disables submit button & shows chars counter
    function enableBtn() {
        let q = document.getElementById("q");
        const hint = document.getElementById("hint");
        (q.value.length >= min) ? setDisabled(false) : setDisabled(true);
        hint.innerHTML = `${q.value.length}/${min}`;
    }
    //

    // Actual content to be rendered, based on API request status
    switch (loading) {
        case "waiting":
            res = "";
            break;
        case "loading":
            res = "Loading...";
            break;
        case "done":
            res = (
                <>
                    <h3>Results for {query}:</h3>
                    <AllMovies movies={data.Search} />
                </>
            );
            break;
        default:
            break;
    }
    //

    return (
        <>
            <Search
                clickFun={search}
                changeFun={enableBtn}
                placeholder="Movies, series,etc..."
                disabled={disabled} />
            {res}
        </>
    );
}