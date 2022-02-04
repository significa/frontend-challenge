import { SearchData } from "../../interfaces/detail";

import './card.css';

interface CardProps {
    poster: string;
    title: string;
}

export default function Card({ poster, title }: CardProps) {
    
    return (
        <div className="card-wrapper">
            <img src={poster} alt={title} />
        </div>
    )
}