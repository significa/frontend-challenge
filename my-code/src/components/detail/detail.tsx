import { useEffect, useState } from "react";
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
        const id = 'tt3896198'
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
                <Back fill='#7A8C99' />
            </div>
            <div className="detail-grid">
                <div className="text">
                    <div className="top">

                    </div>
                    <div className="title">
                        <h1></h1>
                    </div>
                </div>
                <div className="image">
                    <img src={movie?.poster} alt={movie?.title} />
                </div>
            </div>
        </div>
    )
}