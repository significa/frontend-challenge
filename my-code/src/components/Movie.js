import React, { useEffect, useState } from 'react'
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import { FetchMovie } from "./FetchMovie";

export function Movie(props) {
    return (
        <tr>
            <td>{props.item.Title}</td>
            <td>{props.item.Year}</td>
            <td>{props.item.Type}</td>
            <Link to={"/title/" + props.item.imdbID}>
                <td><img className="zoom" width="45%" src={props.item.Poster} alt={props.item.Title} title={props.item.Title}></img></td>
            </Link>

        </tr>

    );

}