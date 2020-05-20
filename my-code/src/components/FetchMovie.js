import React, { useState, useEffect } from "react";
import { Movie } from "./Movie";
import { useParams } from 'react-router';

export function FetchMovie() {
    const [data, setData] = useState({});
    const { id } = useParams();

    async function getData() {
        let apiKey = "798e7a67";

        let url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;

        try {
            let req = await fetch(url);
            let json = await req.json();
            setData(json);

        } catch (error) {
            console.log(error);
        }
    }
    getData();


    return (
        <>
            <div>
                {data.Title}
            </div>
        </>
    );
}