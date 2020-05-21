import React from 'react'
import { API_KEY } from "../constants";
import { useFetch } from "../hooks";
import { SingleMovieDetail } from "./SingleMovieDetail";
import { useParams } from 'react-router';


export function SingleMovieSearch() {
    const { id } = useParams();
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=`;
    const [data, loading] = useFetch(url, id);
    let res;

    console.log(url+id);

    switch (loading) {
        case "waiting":
            res = "Waiting"
            break;
        case "loading":
            res = "Loading...";
            break;
        case "done":
            res = (
                <>
                    <SingleMovieDetail item={data} />
                </>
            );
            break;
        default:
            break;
    }

    return (
        <>
            {res}
        </>
    );



}