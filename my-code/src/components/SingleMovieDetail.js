import React from 'react'

export function SingleMovieDetail(props) {

    return (
        <>
            <p></p>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <h1>{props.item.Title} ({props.item.Year})</h1>
                        <h6>{props.item.Plot}</h6>
                        <hr></hr>
                        <p>Rated: {props.item.Rated}</p>
                        <p>IMDB rating: {props.item.imdbRating}</p>
                        <p>Released: {props.item.Released}</p>
                        <p>Runtime: {props.item.Runtime}</p>
                        <p>Genre: {props.item.Genre}</p>
                        <p>Director: {props.item.Director}</p>
                        <p>Actors: {props.item.Actors}</p>
                        <p>Country: {props.item.Country}</p>
                        <p>Language: {props.item.Language}</p>

                    </div>
                    <div className="col-5">
                        <img width="80%" src={props.item.Poster} alt={props.item.Title} title={props.item.Title}></img>

                    </div>

                </div>
            </div>
        </>
    );

}