import React from 'react'
import emptyIcon from '../assets/images/illustration-empty-state.png'

const emptyStateManager = (props) => {
    if (props.state) {
        return (
            <div className='empty-state-container'>
                <img src={emptyIcon} alt='illustration empty state'/>
                <span className="font-medium text-color-default">
                    {props.state}
                </span>
            </div>
        )
    } else {
        return (
            <div className='empty-state-container'>
                <img src={emptyIcon} alt='illustration empty state'/>
                <h1 className="font-medium text-color-default">
                    Dont Know what to search?
                </h1>
                <span className="font-regular text-color-secundary">
                    here's a offer you can&apos;t refuse
                </span>
            </div>
        )
    }
}

export default emptyStateManager
