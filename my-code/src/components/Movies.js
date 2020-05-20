import React, { useEffect, useState } from 'react'
import { FetchMovies } from "./FetchMovies";

export function Movies() {

    const [query, setQuery] = useState("nada");
    const [disabled, setDisabled] = useState(true);
    const [search, setSearch] = useState(false);

    let apiKey = "798e7a67";


    let min = 3;

    function queryMovie() {
        let q = document.getElementById("q");
        setQuery(q.value);
        setSearch(true);
    }

    function enableBtn(){
        (document.getElementById("q").value.length >= min) ? setDisabled(false):setDisabled(true);
    }

    let url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${query}`;

    return (
        <>  <input id="q" onChange={enableBtn} placeholder="movie"></input>
            <small id="hint"></small>
            <button disabled={disabled} onClick={queryMovie}>search</button>
            {search && <FetchMovies url={url} />}
        </>
    );

}