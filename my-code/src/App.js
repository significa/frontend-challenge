import React, { useState } from "react";
import { Movies } from "./components/Movies";
import { useAPIFetch } from "./hooks/useAPIFetch";

export function App() {

    let apiKey = "798e7a67";

    const [query, setQuery] = useState("Avatar");
    const [disabled, setDisabled] = useState(true);

    let url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;

    const [data, loading, found] = useAPIFetch(url, query);

    let res = loading ? "Loading..." : <Movies movies={data.Search} />

    let searchInput = document.getElementById("q");
    let hint = document.getElementById("hint");
    let min = 3;

    function search() {
        setQuery(searchInput.value);
    }

    function enable() {
        (searchInput.value.length >= 3) ? setDisabled(false) : setDisabled(true);
        hint.innerHTML = `${searchInput.value.length} / ${min}`;
    }

    let form = (
        <>
            <h2>Results for {query}: {data.Search && data.Search.length}</h2>
            <input onChange={enable} id="q" placeholder="Movie, series, etc..."></input>
            <small id="hint"></small>
            <h2>{!found && "Nothing found..."}</h2>
            <button className="btn btn-success" onClick={search} disabled={disabled}>Search</button>
            <p></p>
            {found && res}
        </>
    );

    return (form)
}