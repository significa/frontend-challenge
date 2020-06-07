import React from 'react'

const detailColumn = (props) => {
    return (
        <div className='info-detail-column-container'>
            <h1 className='font-regular text-color-secundary info-detail-column-title'>
                {props.title}
            </h1>
            <div className='info-detail-column'>
                {React.Children.map(props.children, (child) => {
                    return (
                        <h2 className="font-regular text-color-default">
                            {`${child} \n`}
                        </h2>
                    )
                })}
            </div>
        </div>
    )
}

export default detailColumn
