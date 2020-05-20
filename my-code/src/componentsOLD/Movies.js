import React, { useEffect, useState } from 'react'
import { Movie } from "./Movie";
export const Movies = ({ movies }) => {


    function getDetail(title){
        return <Movie title={title}/>
    }

    let result = movies.map((i) => (
        <tr key={i.imdbID}>
            <td>{i.Title}</td>
            <td>{i.Year}</td>
            <td>{i.Type}</td>
            <td>{i.imdbID}</td>
            <td><button onClick={getDetail(i.imdbID)}>GO TO</button></td>
            <td> <img width="25%" src={i.Poster} title={i.Title} alt={i.Title}></img> </td>
        </tr>
    ));

    return (
        <>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>TITLE</th>
                        <th>YEAR</th>
                        <th>TYPE</th>
                        <th>IMDB ID</th>
                        <th>POSTER</th>
                        <th>GO TO</th>                  
                    </tr>
                </thead>
                <tbody>
                    {result}
                </tbody>
            </table>
        </>
    )
};

