import React, { useEffect, useState } from 'react'
import { FetchMovies } from "./FetchMovies";

export function Movies() {

    const [query, setQuery] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [search, setSearch] = useState(false);

    let apiKey = "798e7a67";

    let min = 3;

    function queryMovie() {
        let q = document.getElementById("q");
        let results = document.getElementById("results");
        setQuery(q.value);
        setSearch(true);
        results.innerHTML = `Results for ${q.value}:`;
        document.title = `${q.value} | MOVIES SEARCH`;

    }

    useEffect(() => {
        document.getElementById("q").focus();
    })

    function enableBtn() {
        let q = document.getElementById("q");
        let hint = document.getElementById("hint");
        (q.value.length >= min) ? setDisabled(false) : setDisabled(true);
        hint.innerHTML = `${q.value.length}/${min}`;
    }

    let url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;

    return (
        <>
            <p></p>
            <input id="q" onChange={enableBtn} placeholder="Movie, Series, etc..."></input>
            <small id="hint"></small>
            <p></p>
            <button className="btn btn-primary" disabled={disabled} onClick={queryMovie}>SEARCH</button>
            <p></p>
            <h3 id="results"> </h3>
            {search && <FetchMovies url={url} />}
        </>
    );

}