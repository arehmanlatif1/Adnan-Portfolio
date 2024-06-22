import React from 'react'
import { NavLink } from "react-router-dom"
import "./Navbar.css"
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  return (
    <div className='nav-container'>
      <ul className='nav-main'>
      <li className='nav-list'><NavLink className="nav-link" to="/home">
        <span
         className='nav-title'>H.Adnan</span>
        </NavLink></li>
      <li className='nav-list'><NavLink className="nav-link" to="/gallery">Gallery</NavLink></li>
      <li className='nav-list'><NavLink className="nav-link" to="/price">Price</NavLink></li>
      <li className='nav-list'><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
      <a href="https://www.instagram.com/"><i className="fa-brands fa-instagram"></i></a>

      </ul>

    </div>
  )
}

export default Navbar;