import {
    Container,
    Grid, IconButton, makeStyles, Paper, Typography
} from "@material-ui/core";

import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Search from "@material-ui/icons/Search";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
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


const HomePage = (props) => {
    const classes = useStyles();

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
        getMovies().then(response => {
            console.log(response);
            setMovies(response.Search);
        });
    }, []);


    const searchMovie = (e) => {
        e.preventDefault();
        const newValue = searchValue.toLowerCase().trim();
        // setSearchStatus(true);
        getMovies(newValue).then(response => {
            console.log(response);
            setMovies(response.Search);
        });
    };

    const handleSearchValue = (val) => {
        setSearchValue(val);
    };

    return (
        <Container>
            <Typography variant='h2'>Movies</Typography>


            <div className={classes.margin}>
                <Grid item xl={12} lg={12} >
                    <Paper component="form" onSubmit={e => searchMovie(e,)} className={classes.root}>
                        <TextField className={classes.input}
                            onKeyPress={e => handleSearchValue(e.target.value)}
                            label=""
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton>
                                            <Search />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Paper>

                </Grid>
            </div>



            <Grid container className={classes.spaceGrid} spacing={1} >
                {(movies || {}).length ?
                    (movies || []).map((movie, index) => {
                        return <Grid item xs={12} md={12} lg={2} key={index + 1}>
                            <RouterLink to={`/details/${movie.imdbID}`}>
                                <MovieCard movie={movie} />
                            </RouterLink>
                        </Grid>
                    }) : <div>No Result found</div>
                }

            </Grid>

        </Container>
    )
};



export default HomePage;