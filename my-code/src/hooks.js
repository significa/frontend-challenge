import { useState, useEffect } from "react";

// Makes API requests and returns its results in json format
export function useFetch(url, query, enabled) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState("waiting");
    const fullUrl = url + query;

    async function fetchUrl() {
        setLoading("loading");
        try {
            const response = await fetch(fullUrl);
            const json = await response.json();
            // No results found
            if (json.Response === "False") {
                setLoading("notFound");
            }
            //
            // Results found
            else {
                setData(json);
                setLoading("done");
            }
            //
        } catch (error) {
            console.log(error);
            setLoading("error");
        }
    }

    useEffect(() => {
        enabled && fetchUrl();
    }, [enabled]);

    return [data, loading];
}
