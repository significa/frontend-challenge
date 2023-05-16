import React from 'react';
import logotype from '../../images/logo.svg'
import iconSearch from '../../images/icon-magnifier-grey.svg'

export default function Homepage() {
    return (
        <div className="grid">
            <div className="header">
                <img src={logotype} alt="logotype" />
            </div>
            <div className='search'>
                <input className='search__input' type="text" placeholder='Search movies...'/>
                <img className='search__icon' src={iconSearch} alt="Search icon" />
            </div>
        </div>
    )
}