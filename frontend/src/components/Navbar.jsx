import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation to determine the current route
import "./Navbar.css"; // Ensure styles are correct

function Navbar() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const location = useLocation(); // Get the current route

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    // Add a dynamic class for Cornelia page
    const isCorneliaPage = location.pathname === "/cornelia";

    return (
        <nav className={`navbar ${isCorneliaPage ? "cornelia-navbar" : ""}`}>
            <div className="navbar-logo">
                <Link to="/">MyWebsite</Link> {/* Use Link instead of <a> */}
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
