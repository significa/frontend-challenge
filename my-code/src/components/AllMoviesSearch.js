import React, { useEffect, useState } from 'react'
import { API_KEY, APP_NAME } from "../constants";
import { useFetch } from "../hooks";
import { Search } from "./Search";
import { AllMovies } from "./AllMovies";

export function AllMoviesSearch() {
    
    const min = 3;
    const [query, setQuery] = useState(null);
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;
    const [data, loading] = useFetch(url, query);
    const [disabled, setDisabled] = useState(true);
    let res;
    const q = document.getElementById("q");

    useEffect(() => {
        document.getElementById("q").focus();
    }, [])

    const search = () => {
        setQuery(q.value);
        document.title = `${q.value.toUpperCase()} | ${APP_NAME}`;
    }

    function enableBtn() {
        let q = document.getElementById("q");
        const hint = document.getElementById("hint");
        (q.value.length >= min) ? setDisabled(false) : setDisabled(true);
        hint.innerHTML = `${q.value.length}/${min}`;
    }

    switch (loading) {
        case "waiting":
            res = "Waiting"
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