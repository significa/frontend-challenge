
import {
    Card, CardContent, CardHeader, CardMedia, Container,
    Grid, IconButton, makeStyles, Paper, Typography
} from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {},
    margin: {
        margin: theme.spacing(1),
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
    },
    card: {
        width: '12.5em',
        position: 'relative'
    },
    overlay: {
        position: 'absolute',
        bottom: '0',
        color: 'white',
        fontSize: '17px',
        fontWeight: '500',
        margin: "12px",
        textAlign: 'center',
        zIndex:99
    },
    cover: {
        position: 'absolute',
        backgroundColor: 'rgba(1, 1, 1, 0.7)',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    overlayHelper: {
        display: 'none'
    }
}));


const MovieCard = ({ movie }) => {

    const classes = useStyles();

    const [activeClass, setClass] = useState(false);

    const changeDisplay = (e, status) => {
        if (status) {
            setClass(true);
        } else {
            setClass(false);
        }
    };


    return (
        <div onMouseLeave={(e) => changeDisplay(e, false)} onMouseOver={(e) => changeDisplay(e, true)} id='card-img' className={classes.card}>

            <Card>
                <CardMedia
                    className={classes.media}
                    image={movie?.Poster}
                    title={movie?.Title}
                />

                <div className={activeClass ? classes.overlay : classes.overlayHelper}>
                    {movie?.Title}
                </div>

                <div className={activeClass ? classes.cover : ''}>
                </div>

            </Card>
        </div>

    )
}

export default MovieCard