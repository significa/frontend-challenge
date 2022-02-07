import { useState } from "react";
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
        pathname: `/movie/:${imdbID}`,
        state: favourite
    };

    const favouriteHandler = (event: Event) => {
        setFavourite(!favourite);
        event.preventDefault();
        event.stopPropagation();
    }
    return (
        <Link to={params}>
            <div className="card-wrapper">
                <img src={poster !== 'N/A' ? poster : defaultImage} alt={title} />
                <div className="card-hover">
                    <div className="favourite" onClick={(event: any) => favouriteHandler(event)}>
                        <Heart fill={favourite ? 'white' : ''} height="24" width="24" />
                    </div>
                    <h4 className="title">{ title.length > 30 ? `${title.slice(0, 30)} ...` : title }</h4>
                    <h4 className="year">{ year }</h4>
                </div>
            </div>
        </Link>
    )
}