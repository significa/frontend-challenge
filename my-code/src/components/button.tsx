import { useEffect, useMemo, useState } from "react";

import Heart from "../assets/1.Icons/heart";

interface ButtonProps {
    id?: string;
}
export default function Button({ id }: ButtonProps) {
    const [favourite, setFavourite] = useState(false);
    
    useEffect(() => {
        const existingMoviesIds = localStorage.getItem('movies');
        const existingMoviesIdsArray: string[] = JSON.parse(existingMoviesIds ? existingMoviesIds : '[]');
        if (id) {
            const present = existingMoviesIdsArray.includes(id);
            if (present) setFavourite(value => !value);
        }
    }, [id]);

    const favouriteHandler = (favourite: boolean) => {
        setFavourite(value => !value);
        favourite = !favourite;
        const existingMoviesIds = localStorage.getItem('movies');
        let existingMoviesIdsArray: string[];
        if (favourite) {
            existingMoviesIdsArray = [...JSON.parse(existingMoviesIds ? existingMoviesIds : '[]'), id];
        } else {
            existingMoviesIdsArray = [...JSON.parse(existingMoviesIds ? existingMoviesIds : '[]')].filter(item => item !== id);
        }
        localStorage.setItem('movies', JSON.stringify(existingMoviesIdsArray));
    }

    const favoriteStyle = useMemo(() => ({
        backgroundColor: favourite ? '#FF4040' : '#0A1014',
        color: favourite ? 'white' : '#7A8C99',
        width: favourite ? '104px' : '182px'
    }), [favourite])
    
    return (
        <button className="favourite" style={favoriteStyle} onClick={() => favouriteHandler(favourite)}>
            <div className="icon">
                <span><Heart fill={favourite ? 'white' : ''} height="16" width="16" /></span>
            </div>
            <div className="text">
                <h4>
                    {favourite ? 'Added' : 'Add to favourites'}
                </h4>
            </div>
        </button>
    )
}