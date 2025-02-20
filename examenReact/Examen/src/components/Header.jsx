import React from 'react'
import logo from '../assets/react.svg'
import Nav from './Nav'

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