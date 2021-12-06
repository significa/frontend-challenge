import {
    Container, Box, Button,
    Grid, makeStyles, Typography
} from "@material-ui/core";

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import { getMovie } from "../../data-service/getMovies";
import MovieCard from "../HomePage/MovieCard";


const useStyles = makeStyles((theme) => ({
    root: {},
    btn: {
        textAlign: 'left'
    },
    page: {
        margin: 'auto',
        width: '50%',
        marginTop: '5em',
        borderLeft: '1px solid red',
        height: '70vh'
    },
    detail: {
        padding: '1.5em',
        margin: "2em"
    }
}));


const MovieDetail = (props) => {
    const classes = useStyles();

    const { movieID } = useParams();

    const [movie, setMovie] = useState({});

    useEffect(() => {
        getMovie(movieID).then(response => {
            console.log(response);
            setMovie(response);
        });
    }, [movieID]);




    return (
        <Container maxWidth='md'>

            <div className={classes.page}>

                <div className={classes.detail}>
                    <Box sx={{
                        alignItems: 'left',
                        justifyContent: 'left'
                    }}
                    >

                        <RouterLink color='secondary' to="/">
                            <Button color='secondary'>
                                Back
                            </Button>

                        </RouterLink>
                    </Box>

                    <Grid container>
                        <Grid item xs={12} md={12} lg={6} >
                            <MovieCard movie={movie} />

                            <Typography variant='body1'>{movie?.Genre}</Typography>

                            <Box sx={{
                                padding: "2em"
                            }}
                            ></Box>


                            <Typography variant='caption'>{movie?.Plot}</Typography>
                        </Grid>
                    </Grid>
                </div>


            </div>



        </Container>
    )
};



export default MovieDetail;