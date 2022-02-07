import Heart from "../../assets/1.Icons/heart";
import { SearchData } from "../../interfaces/detail";

import './card.css';

interface CardProps {
    poster: string;
    title: string;
    year: string;
}

export default function Card({ poster, title, year }: CardProps) {
    return (
        <div className="card-wrapper">
            <img src={poster} alt={title} />
            <div className="card-hover">
                <div className="favourite">
                    <Heart height="24" width="24" />
                </div>
                <h4 className="title">{ title.length > 30 ? `${title.slice(0, 30)} ...` : title }</h4>
                <h4 className="year">{ year }</h4>
            </div>
        </div>
    )
}