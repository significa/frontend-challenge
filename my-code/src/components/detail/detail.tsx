import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
import { MovieData } from "../../interfaces/home";
import fetchApiData from "../../utils/fetchData";
import Back from '../../assets/1.Icons/back';

// import back from '../../assets/1.Icons/icon-arrow-grey.png';
import './detail.css';

export default function Detail() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [movie, setMovie] = useState<MovieData>();

    // const { id } = useParams();

    useEffect(() => {
        let mounted = true;
        setError('');
        setLoading(true);
        const id = 'tt0082406'
        const url = `http://www.omdbapi.com/?apikey=b02d2b50&i=${id}`;
        if (mounted) {
            (async () => {
                const { data, error } = await fetchApiData<MovieData>(url);
                setLoading(false);
                if (error) {
                    setError(error);
                } else {
                    setMovie(data);
                }
            })();
        };
        return () => {
            mounted = false;
        }
    }, []);

    return (
        <div className="detail-wrapper">
            <div className="icon-back">
                {/* <img src={back} alt="back" /> */}
                <Back fill='#7A8C99' />
            </div>
            <div className="detail-grid">
                <div className="text">
                    <div className="top">
                        <span>{movie?.Runtime}</span>
                        <span>{movie?.Year}</span>
                        <span>{movie?.Rated}</span>
                    </div>
                    <div className="title">
                        <h1>
                            {movie?.Title}
                        </h1>
                    </div>
                    <div className="btn-section">
                        <button className="imdb">
                            <div className="logo">

                            </div>
                            <div className="rating">
                                <h4>
                                    {movie?.Ratings[0].Value}
                                </h4>
                            </div>
                        </button>
                        <button className="rotten">
                            <div className="logo">

                            </div>
                            <div className="rating">
                                <h4>
                                    {movie?.Ratings[1].Value}
                                </h4>
                            </div>
                        </button>
                        <button className="favourite">
                            <div className="icon">

                            </div>
                            <div className="text">
                                <h4>
                                    Add to favourites
                                </h4>
                            </div>
                        </button>
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
                        <div className="plot">
                            <h4 className="title">
                                Cast
                            </h4>
                            {movie?.Actors.split(',').map((item, i) => {
                                return <h4 className="content"><React.Fragment key={i}>{item}</React.Fragment></h4>;
                            })}
                        </div>
                        <div className="plot">
                            <h4 className="title">
                                Genre
                            </h4>
                            {movie?.Genre.split(',').map((item, i) => {
                                return <h4 className="content"><React.Fragment key={i}>{item}</React.Fragment></h4>;
                            })}
                        </div>
                        <div className="plot">
                            <h4 className="title">
                                Director
                            </h4>
                            {movie?.Director.split(',').map((item, i) => {
                                return <h4 className="content"><React.Fragment key={i}>{item}</React.Fragment></h4>;
                            })}
                        </div>
                    </div>
                </div>
                <div className="image">
                    <img src={movie?.Poster} alt={movie?.Title} />
                </div>
            </div>
        </div>
    )
}