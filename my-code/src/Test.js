import React, { useEffect, useState } from "react";

export function GetAPI() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);

    async function getData() {
        try {
            let url = `https://hn.algolia.com/api/v1/search_by_date?query=${query}`;
            let req = await fetch(url);
            let json = await req.json();
            setData(json.hits.filter(i => i.title));
            console.log(json.hits);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }

    }

    function change() {
        let newQuery = document.getElementById("queryFor");
        setQuery(newQuery.value);
    }

    useEffect(() => {
        getData();
    }, [query])


    let results = data.map((i, index) => (
        <tr key={i.objectID}>
            <td>{index + 1}</td>
            <td>{i.created_at}</td>
            <td>{i.title}</td>
            <td>{i.author}</td>
            <td><a href={i.url}><button className="bnt btn-success">Access</button></a></td>
        </tr>
    ));

    let res = loading ? "Loading..." : results;

    return (
        <>
            <h2>Found {data.length} Results for {query}</h2>
            <input id="queryFor"></input><button onClick={change}>Search</button>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Created at</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Access</th>
                    </tr>
                </thead>
                <tbody>
                    {res}
                </tbody>
            </table>
        </>
    )
}