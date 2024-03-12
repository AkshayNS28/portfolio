import React from 'react'
import { NavLink } from 'react-router-dom';
import '../Navbar/Navbar.css';

const Navbar = () => {
    return (
        <nav id="navbar">
            <ul>
                <li>
                    <NavLink className={(e) => { return e.isActive ? "" : "" }} to="/portfolio/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/portfolio/about">About</NavLink>
                </li>
                <li>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/portfolio/education">Education</NavLink>
                </li>
                <li>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/portfolio/skills">Skills</NavLink>
                </li>
                {/*
                <li>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/Memories">Memories</NavLink>
                </li>
    */}
                <li>
                    <NavLink className={(e) => { return e.isActive ? "red" : "" }} to="/portfolio/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar