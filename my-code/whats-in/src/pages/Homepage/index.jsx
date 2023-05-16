import React from 'react';
import logotype from '../../images/logo.svg'
import iconSearch from '../../images/icon-magnifier-grey.svg'
import empty from '../../images/illustration-empty-state@2x.png'

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
            <div className='empty'>
                <img className='empty__image' src={empty} alt="Empty search" />
                <h2>Don’t know what to search?</h2>
                <p className='empty__subheader--lightgrey'>Here’s an offer you can’t refuse</p>
            </div>
        </div>
    )
}