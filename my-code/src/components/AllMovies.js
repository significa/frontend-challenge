import React from "react";
import { SingleMovie } from "./SingleMovie";

export function AllMovies(props) {
    
    const allMovies = props.movies.map((movie) => (
        <SingleMovie key={movie.imdbID} item={movie} />
    ));

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>YEAR</th>
                        <th>TYPE</th>
                        <th>POSTER</th>
                    </tr>
                </thead>
                <tbody>
                    {allMovies}
                </tbody>
            </table>
        </>
    );

}