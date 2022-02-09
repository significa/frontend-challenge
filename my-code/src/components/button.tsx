import { useMemo, useState } from "react";

import Heart from "../assets/1.Icons/heart";

interface ButtonProps {
    className: string;
    image?: string;
    text?: string;
    favouriteBtn?: boolean;
}

export default function Button({ className, image, text, favouriteBtn }: ButtonProps) {
    const [favourite, setFavourite] = useState(false);
    const [heartFill, setHeartFill] = useState(false);
    
    const addToFavourites = () => {
        setFavourite(!favourite);
        setHeartFill(!heartFill);
    }

    const favoriteStyle = useMemo(() => ({
        backgroundColor: favourite ? '#FF4040' : '#0A1014',
        color: favourite ? 'white' : '#7A8C99',
        width: favourite ? '104px' : '182px'
    }), [favourite])
    
    return (
        <button className={className} style={favouriteBtn ? favoriteStyle : undefined} onClick={favouriteBtn ? addToFavourites : undefined}>
            {favouriteBtn ?
            <>
                <div className="icon">
                    <span><Heart fill={heartFill ? 'white' : ''} height="16" width="16" /></span>
                </div>
                <div className="text">
                    <h4>
                        {favourite ? 'Added' : 'Add to favourites'}
                    </h4>
                </div>
            </>
            :
            <>
                <div className="logo">
                    <div className="logo">
                        <img src={image} alt="logo" />
                    </div>
                </div>
                <div className="rating">
                    <h4>
                        {text}
                    </h4>
                </div>
            </>
            }
        </button>
    )
}