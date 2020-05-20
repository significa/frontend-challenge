import { useState, useEffect } from "react";

export function useAPIFetch(url, query) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [found, setFound] = useState(false);

    async function getData() {
        try {
            let req = await fetch(url);
            let json = await req.json();
            if (json.Search || json.Title) {
                setData(json);
                setFound(true);
                setLoading(false);
            }
            else {
                setFound(false);
            }
            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        document.getElementById("q").focus();
        getData();
    }, [query]);

    return [data, loading, found];
}