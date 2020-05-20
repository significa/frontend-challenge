import React, { useState, useEffect } from "react";
import { Movie } from "./Movie";
import { useParams } from 'react-router';

export function FetchMovie() {
    const [data, setData] = useState({});
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    async function getData() {
        let apiKey = "798e7a67";

        let url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`;

        try {
            let req = await fetch(url);
            let json = await req.json();
            setData(json);
            setLoading(false);

        } catch (error) {
            console.log(error);
        }
    }
    getData();

    let res = loading ? "Loading..." :
        (
            <>
                <p></p>
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <h1>{data.Title} ({data.Year})</h1>
                            <h6>{data.Plot}</h6>
                            <hr></hr>
                            <p>Rated: {data.Rated}</p>
                            <p>IMDB rating: {data.imdbRating}</p>
                            <p>Released: {data.Released}</p>
                            <p>Runtime: {data.Runtime}</p>
                            <p>Genre: {data.Genre}</p>
                            <p>Director: {data.Director}</p>
                            <p>Actors: {data.Actors}</p>
                            <p>Country: {data.Country}</p>
                            <p>Language: {data.Language}</p>

                        </div>
                        <div className="col-5">
                            <img width="80%" src={data.Poster} alt={data.Title} title={data.Title}></img>

                        </div>

                    </div>
                </div>
            </>
        );

    return res;
}