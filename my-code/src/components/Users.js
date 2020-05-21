// Photos.js
import React, { useState, useEffect } from "react";
import { useFetch } from "../hooks";
import { Search } from "../components/Search";
import { User } from "../components/User";

export function Users() {

    const [query, setQuery] = useState(null);
    let res;
    const url = "https://jsonplaceholder.typicode.com/posts/";
    const [data, loading] = useFetch(url, query);

    useEffect(() => {
        document.getElementById("q").focus();
    }, [query])

    const search = () => {
        let q = document.getElementById("q");
        setQuery(q.value);
    }

    switch (loading) {
        case "waiting":
            res = "Waiting"
            break;
        case "loading":
            res = "Loading...";
            break;
        case "done":
            res = <User obj={data} />
            break;
        default:
            break;
    }

    return (
        <>
            <Search click={search} />
            {res}
        </>
    );
}

