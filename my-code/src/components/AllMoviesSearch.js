import React, { useEffect, useState } from 'react'
import { API_KEY, APP_NAME } from "../constants";
import { useFetch } from "../hooks";
import { Search } from "./Search";
import { AllMovies } from "./AllMovies";

export function AllMoviesSearch() {

    const min = 3; // Min chars count to search
    const [query, setQuery] = useState(null);
    const [enabled, setEnabled] = useState(false); // for useFetch() 
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;
    // Custom hook to make API requests (activation depends on "enabled" arg)
    const [data, loading] = useFetch(url, query, enabled);
    //
    const [disabled, setDisabled] = useState(true); // Submit button's status
    let res;
    let q = document.getElementById("q");

    // Keeps focus on input field
    useEffect(() => {
        document.getElementById("q").focus();
    }, [query])
    //

    // Enables & makes the API request
    const search = () => {
        setEnabled(true);
        document.title = `${q.value.toUpperCase()} | ${APP_NAME}`;
    }
    //

    // Enables/disables submit button & shows chars counter
    function enableBtn(e) {
        setEnabled(false);
        let qry = e.target.value;
        setQuery(qry);
        const hint = document.getElementById("hint");
        (qry.length >= min) ? setDisabled(false) : setDisabled(true);
        hint.innerHTML = `${qry.length}/${min}`;
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
        case "notFound":
            res = "No results found...";
            break;
        case "error":
            res = "There was an error with the server.";
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