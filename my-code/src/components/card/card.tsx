import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Heart from "../../assets/1.Icons/heart";
import defaultImage from '../../assets/defaults/Default.png';

import './card.css';

interface CardProps {
    poster: string;
    title: string;
    year: string;
    imdbID: string;
}

export default function Card({ poster, imdbID, title, year }: CardProps) {
    const [favourite, setFavourite] = useState(false);
    const params = {
        pathname: `/movie/:${imdbID}`
    };

    const favouriteHandler = (event: Event) => {
        setFavourite(!favourite);
        event.preventDefault();
    }

    const heartStyle = useMemo(() => {
        if (favourite) return {
            visibility: 'visible' as 'visible'
        }
    }, [favourite]);
    
    return (
        <Link to={params}>
            <div className="card-wrapper">
                <img src={poster !== 'N/A' ? poster : defaultImage} alt={title} />
                <div className="card-overlay">
                    <div className="favourite" style={heartStyle} onClick={(event: any) => favouriteHandler(event)}>
                        <Heart fill={favourite ? 'white' : ''} height="24" width="24" />
                    </div>
                    <h4 className="title">{ title.length > 30 ? `${title.slice(0, 30)} ...` : title }</h4>
                    <h4 id="year" className="year">{ year }</h4>
                </div>
            </div>
        </Link>
    )
}