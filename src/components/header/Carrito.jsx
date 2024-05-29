import React from 'react'

export const Carrito = (props) => {
    return (
        <div className="cart">
            <a className='cart-anchor' href="">🛒</a>
            <small>{props.numerito}</small>
        </div>
    )
}
