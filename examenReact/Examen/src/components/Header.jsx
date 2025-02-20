import React from 'react'
import logo from '../assets/react.svg'
import Navbar from './Nav'

export const Header= () => {
    return (
        <>
            <div>
            <img src={logo} alt="" />

            </div>
            <div>
                <Nav/>
            </div>
        </>
    )
}