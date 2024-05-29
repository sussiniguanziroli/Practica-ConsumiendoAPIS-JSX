import React from 'react'
import { Carrito } from './Carrito'
import { NavBar } from './NavBar'

export const Header = (props) => {
    return (
        <header className='header'>
            <h1>TiendaTech</h1>
            <NavBar />
            <Carrito numerito={props.numerito} />
        </header>
    )
}
