import React from 'react'
import logo from '../assets/New-Sciastra-Logo.svg'
import {NavLink} from "react-router-dom"

function Navbar() {
    const activeNav = ''
    const pendingNav = ''
    return (
        <>
            <nav className='nav-class flex flex-row items-center h-20 justify-between px-10'>
                <div className="name-container flex flex-row items-center justify-center text-2xl font-extrabold">
                SciAstra   
                </div>
                <div className="logo-container w-12 h-12 flex flex-row items-center justify-center ">
                <img src={logo} alt="logo" /> 
                </div>
                <div className="nav-link-container flex flex-row items-center gap-5 font-medium">
                    <NavLink
                        to = "/"
                        className={({ isActive, isPending }) => isPending ? `pending` : isActive ? "active" : "nav-link"}
                    >
                        HOME
                    </NavLink>
                    <NavLink
                        to = "/course"
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "nav-link"  }
                    >
                        COURSES
                    </NavLink>
                    <NavLink
                        to = "/selection"
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "nav-link"}
                    >
                        SELECTION
                    </NavLink>
                    <NavLink
                        to = "/blog"
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "nav-link"}
                    >
                        BLOGS
                    </NavLink>
                    <NavLink
                        to = "/material"
                         className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "nav-link"  }
                    >
                        MATERIALS
                    </NavLink>
                    <NavLink
                        to = "/teams"
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "nav-link" }
                    >
                        TEAM
                    </NavLink>
                    <NavLink
                        to="contact"
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : "nav-link" }
                    >
                        CONTACT US
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar