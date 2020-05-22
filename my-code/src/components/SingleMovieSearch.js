import React from 'react'
import { API_KEY } from "../constants";
import { useFetch } from "../hooks";
import { SingleMovieDetail } from "./SingleMovieDetail";
import { useParams } from 'react-router';

export function SingleMovieSearch() {
    const { id } = useParams();
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=`;
    // Custom hook to make API requests (uses URL parameter "id" as query)
    const [data, loading] = useFetch(url, id, true);
    //

    // Actual content to be rendered, based on API request status
    switch (loading) {
        case "loading":
            return (<> <h2>Loading... </h2> </>);
        case "notFound":
            return (<> <h2>No results found...</h2> </>);
        case "error":
            return (<> <h2>There was an error with the server...</h2> </>);
        case "done":
            return (
                <>  
                    <SingleMovieDetail item={data} />
                </>
            );
        default:
            return (<> <h2> </h2> </>);
    }
    //

}