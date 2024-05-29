import React from 'react'

export const Item = ({ producto }) => {
    return (
        <div className='producto'>
            <img src={producto.image} alt={producto.image} />
            <h2>{producto.name}</h2>
            <p>${producto.price}</p>
            <p>{producto.description}</p>
        </div>
    )
}
