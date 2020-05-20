import React, { useEffect, useState } from 'react'
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import { FetchMovie } from "./FetchMovie";

export function Movie(props) {
    return (
        <tr>
            <td>{props.item.Title}</td>
            <td>{props.item.Year}</td>

            <td>
                <button className="btn btn-dark mr-1"><Link to={"/title/" + props.item.imdbID}>GO TO</Link></button>
            </td>
        </tr>

    );

}