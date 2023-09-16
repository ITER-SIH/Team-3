import React from 'react'
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="left">
            <h1>Navbar</h1>
        </div>
        <div className="right">
            <input type="checkbox" id="check"/>
            <label htmlFor="check" className="checkBtn">
                <i className="fa fa-bars"></i>
            </label>
            <ul className="list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
    </nav>

    </>
  )
}

export default Navbar