import React from 'react';
import { Link } from 'react-router-dom';
import heartFull from '../assets/icons/icon-heart-full.svg';
import heartWhite from '../assets/icons/icon-heart-white.svg';

const movieCard = (props) => {
    return props.data.map((data) => {
        return (
            <div className='movie-card'
                key={data.imdbID}
                style={{ backgroundImage: `url(${data.Poster})` }}
            >
                {props.addedMovies.includes(data.imdbID) ?
                    <a onClick={() => { props.handleAddButton(data.imdbID) }}
                        className='movie-card-fav-btn active'
                    >
                        <img src={heartFull} alt='movie poster'/>
                    </a>
                    :
                    <a onClick={() => { props.handleAddButton(data.imdbID) }}
                        className='movie-card-fav-btn'
                    >
                        <img src={heartWhite} alt='movie poster'/>
                    </a>
                }
                <Link className='movie-card-wrapper'
                    to={{
                        pathname: '/movie-info',
                        state: { imdbID: data.imdbID }
                    }}
                >
                    <div className='movie-card-info'>
                        <h1 className="font-medium text-color-default">{data.Title}</h1>
                        <span className="font-regular text-color-default">{data.Year}</span>
                    </div>
                </Link>
            </div>
        )
    })
}

export default movieCard;
