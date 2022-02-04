import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MovieData } from "../../interfaces/home";
import fetchApiData from "../../utils/fetchData";

export default function Detail() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [movie, setMovie] = useState<MovieData[]>([]);

    const { id } = useParams();

    useEffect(() => {
        let mounted = true;
        setError('');
        setLoading(true);
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
        <div>

        </div>
    )
}