import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="navbar-container">
            <Link className='navbar-header-link' to="/">Applikations Namn</Link>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/Profile" className="navbar-link">Profile</Link>
                <Link to="/" className="navbar-link">About Us</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar