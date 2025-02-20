import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <ul>
        
        <Link to="/">Home</Link>
        <Link to="/Shoes">Shoes</Link>
        <Link to="/Electronics">Electronica</Link>
        <Link to="/Furniture">Follar</Link>
    
    </ul>

    </>
)
}

export default Navbar