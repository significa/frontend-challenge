import React from 'react'
import heartGrey from '../assets/icons/icon-heart-grey.svg'
import heartFull from '../assets/icons/icon-heart-full.svg'

const searchInput = (props) => {
    if (props.addedMovies.length <= 0) {
        return (
            <a onClick={() => { props.handleAddButton(props.imdbID) }} className='info-rate-button-add'>
                <img src={heartGrey}/>
                <span className='font-regular text-color-secundary'>
                    Add to favourites
                </span>
            </a>
        )
    } else if (props.addedMovies.includes(props.imdbID)){
        return (
            <a onClick={() => { props.handleAddButton(props.imdbID) }} className='info-rate-button-added'>
                <img src={heartFull}/>
                <span className='font-regular text-color-default'>
                    Added
                </span>
            </a>
        )

    }
    return (
        <a onClick={() => { props.handleAddButton(props.imdbID); }} className='info-rate-button-add'>
            <img src={heartGrey}/>
            <span className='font-regular text-color-secundary'>
                Add to favourites
            </span>
        </a>
    )
}

export default searchInput;