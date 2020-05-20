import React, { useState, useEffect } from "react";

export function DataFetch() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);

    async function makeRequest() {
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        let json = await res.json();
        setPost(json);
    }

    function change(){
        setId(document.getElementById("id").value);
    }

    useEffect(() => {
        makeRequest();
    }, [id]);

    return (
        <div>
            <input id="id" type="number" max="100" min="1" defaultValue="1"></input><p></p>
            <button onClick={change}>Search</button>
            {post.title}
        </div>
    )
}