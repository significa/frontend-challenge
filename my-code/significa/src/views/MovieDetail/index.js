import {
    Container,
    Grid, IconButton, makeStyles, Paper, Typography
} from "@material-ui/core";


import { useEffect, useState } from "react";
import { getMovies } from "../../data-service/getMovies";
import MovieCard from "./MovieCard";

const useStyles = makeStyles((theme) => ({
    root: {},
    margin: {
        margin: theme.spacing(1),
    },
    page: {
        maxHeight: "auto"
    },
    input: {
        width: '100% !important',
        fontSize: '11px !important'
    },
    spaceGrid: {
        margin: "0.1px !important"
    }
}));


const MovieDetail = (props) => {
    const classes = useStyles();

    const [movie, setMovie] = useState({});

    useEffect(() => {
        getMovies().then(response => {
            console.log(response);
            // setMovie(response.Search);
        });
    }, []);


    return (
        <Container>
            <Grid item >
                <MovieCard movie={movie} />
            </Grid>
        </Container>
    )
};



export default MovieDetail;