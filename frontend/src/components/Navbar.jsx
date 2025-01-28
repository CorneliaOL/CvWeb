import React, { useState } from "react";
import "./Navbar.css"; // Ensure this file contains the above CSS

function Navbar() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">MyWebsite</a>
            </div>
            <button className="menu-toggle" onClick={toggleDropdown}>
                ☰
            </button>
            <ul className={`navbar-links ${isDropdownVisible ? "show" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/cornelia">Cornelia</a></li>
                <li><a href="/lucas">Lucas</a></li>
                <li><a href="/projects">Projects</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
