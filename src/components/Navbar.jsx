import React from 'react'
import logo from '../assets/New-Sciastra-Logo.svg'
import {NavLink} from "react-router-dom"

function Navbar() {
  return (
    <>
        <nav className='nav-class flex flex-row items-center h-20 justify-between px-10'>
            <div className="name-container flex flex-row items-center justify-center text-2xl font-extrabold">
               SciAstra   
            </div>
            <div className="logo-container w-12 h-12 flex flex-row items-center justify-center">
               <img src={logo} alt="logo" /> 
            </div>
            <div className="nav-link-container flex flex-row items-center gap-4 ">
                <NavLink>HOME</NavLink>
                <NavLink>COURSES</NavLink>
                <NavLink>SELECTION</NavLink>
                <NavLink>BLOGS</NavLink>
                <NavLink>MATERIALS</NavLink>
                <NavLink>TEAM</NavLink>
                <NavLink>CONTACT US</NavLink>
            </div>
        </nav>
    </>
  )
}

export default Navbar