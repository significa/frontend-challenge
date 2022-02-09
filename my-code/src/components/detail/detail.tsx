import React, { useEffect, useState } from "react";
import {Link, useParams} from "react-router-dom";

import { MovieData } from "../../interfaces/detail";
import fetchApiData from "../../utils";
import { resultIsError } from "../../utils";

import Spinner from "../spinner/spinner";
import DetailColumns from "../detailColumns";
import Button from "../button";
import ErrorMessage from "../errorMessage";
import Label from "../label";
import Back from '../../assets/1.Icons/back';

import rotten from '../../assets/2.Logos/logo-rotten-tomatoes.svg';
import imdb from '../../assets/2.Logos/logo-imdb.svg';
import defaultImage from '../../assets/defaults/Default.png';

import './detail.css';

export default function Detail() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [movie, setMovie] = useState<MovieData>();
    const [backFill, setBackFill] = useState(false);

    const paramsObj = useParams();

    useEffect(() => {
        let mounted = true;
        setError('');
        setLoading(true);
        const id = paramsObj.id?.replace(':', '');
        const url = `http://www.omdbapi.com/?apikey=b02d2b50&i=${id}`;
        if (mounted) {
            (async () => {
                const { data, error: fetchError } = await fetchApiData<MovieData>(url);
                setLoading(false);
                if (fetchError) {
                    setError(fetchError);
                } else if (resultIsError(data)) {
                    setError(data.Error);
                } else {
                    setMovie(data);
                }
            })();
        };
        return () => {
            mounted = false;
        }
    }, [paramsObj]);

    const backFillToggle = () => {
        setBackFill(value => !value);
    }

    return (
        <div className="detail-wrapper">
            {loading ?
                <Spinner />
            : null}
            {error ?
                <ErrorMessage message={`There was an error loading the movie: ${error}`} />
                : null}
            {!loading && !error ?
                <>
                    <div className="icon-back">
                        <Link to='/'>
                            <span onMouseEnter={backFillToggle} onMouseLeave={backFillToggle}>
                                <Back fill={backFill ? 'white' : '#7A8C99'} />
                            </span>
                        </Link>
                    </div>
                    <div className="detail-grid">
                        <div className="text">
                            <div className="top">
                                <span id="runtime" className="runtime">{movie?.Runtime} &middot; {movie?.Year} &middot;</span>
                                <span className="rated">{movie?.Rated}</span>
                            </div>
                            <div className="title">
                                <h1>
                                    {movie?.Title}
                                </h1>
                            </div>
                            <div className="btn-section">
                                <Label className="imdb" image={imdb} text={movie?.Ratings[0]?.Value || 'N/A'} />
                                <Label className="rotten" image={rotten} text={movie?.Ratings[1]?.Value || 'N/A'} />
                                <Button />
                            </div>
                            <div className="plot">
                                <h4 className="title">
                                    Plot
                                </h4>
                                <h4 className="content">
                                    {movie?.Plot}
                                </h4>
                            </div>
                            <div className="bottom">
                                <DetailColumns title='Cast' data={movie?.Actors} />
                                <DetailColumns title='Genre' data={movie?.Genre} />
                                <DetailColumns title='Director' data={movie?.Director} />
                            </div>
                        </div>
                        <div className="image">
                            <img src={movie?.Poster !== 'N/A' ? movie?.Poster : defaultImage} alt={movie?.Title} />
                        </div>
                    </div>
                </>
            : null}
        </div>
    )
}