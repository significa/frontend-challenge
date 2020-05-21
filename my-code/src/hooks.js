import { useState, useEffect } from "react";

export function useFetch(url, query) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState("waiting");
    const fullUrl = url + query;

    async function fetchUrl() {
        setLoading("loading");
        try {
            const response = await fetch(fullUrl);
            const json = await response.json();
            setData(json);
            setLoading("done");
        } catch (error) {
            console.log(error);
            setLoading("error");
        }
    }

    useEffect(() => {
        query !== null && fetchUrl();
    }, [query]);

    return [data, loading];
}
