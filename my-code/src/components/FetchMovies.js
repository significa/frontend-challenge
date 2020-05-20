import React, { useState } from "react";
import { Movie } from "./Movie";

export function FetchMovies(props) {
    const [data, setData] = useState([]);
    const [found, setFound] = useState(false);

    async function getData() {
        try {
            let req = await fetch(props.url);
            let json = await req.json();
            if (json.Search) {
                setData(json.Search);
                setFound(true);
            }
            else {
                setFound(false);
            }

        } catch (error) {
            console.log(error);
        }
    }
    getData();

    let res = data.map(i => (
        <Movie item={i} />
    ));

    let result = !found ? "Nothing found..." :
        (
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
                        {res}
                    </tbody>
                </table>
            </>
        );


    return result;
}