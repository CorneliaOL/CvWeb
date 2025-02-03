import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation to determine the current route
import "./Navbar.css"; // Ensure styles are correct

function Navbar() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const location = useLocation(); // Get the current route

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    // Determine if it's Cornelia's or Lucas's page
    const isCorneliaPage = location.pathname.toLowerCase() === "/cornelia";
    const isLucasPage = location.pathname.toLowerCase() === "/lucas";
    const isProjectPage = location.pathname.toLowerCase() === "/projects";


    // Set dynamic classes based on the current route
    const dynamicClass = isCorneliaPage
        ? "cornelia-navbar"
        : isLucasPage
        ? "lucas-navbar"
        : isProjectPage
        ? "project-navbar"
        :"";

    return (
        <nav className={`navbar ${dynamicClass}`}>
            <div className="navbar-logo">
                <Link to="/">
                Portfolio</Link> {/* Use Link instead of <a> */}
            </div>
            <button className="menu-toggle" onClick={toggleDropdown}>
                ☰
            </button>
            <ul className={`navbar-links ${isDropdownVisible ? "show" : ""}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cornelia">Cornelia</Link></li>
                <li><Link to="/lucas">Lucas</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
