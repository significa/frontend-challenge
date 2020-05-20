import { React, useState, useEffect } from "react";


export function UseFetchAPI(props) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(1);

    async function getData() {
        let req = await fetch(props.url + id);
        let json = await req.json();
        setData(json);
        console.log(json);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, [id])

    return (
        <div>
            <input value={id} onChange={e => setId(e.target.value)}></input>
            <div></div>
        </div>
    );
}