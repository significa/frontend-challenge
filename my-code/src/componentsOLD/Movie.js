import React,{useEffect,useState} from 'react'
import { useAPIFetch } from "../hooks/useAPIFetch";



export function Movie(props){
    let apiKey = "798e7a67";

    //const [query, setQuery] = useState("Avatar");
    //const [disabled, setDisabled] = useState(true);

    let url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${props.title}`;

    const [data, loading, found] = useAPIFetch(url, props.title);
    return (
        <div>
        <p>{loading && "Loading..."}</p>
        <p>{found && data.Title}</p>
    </div>
    );
}

