import React from 'react'

const searchInput = (props) => {
    return (
        <div>
            <input type="text"
                placeholder="Search movies..."
                onChange={(e) => { props.handleChange(e) }}
                className="search-input"
            />
        </div>
    )
}

export default searchInput
