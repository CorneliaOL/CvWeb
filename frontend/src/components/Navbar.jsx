import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">MyWebsite</Link>
            </div>
            {/* Menu Toggle Button (Visible on Small Screens) */}
            <button className="menu-toggle" onClick={toggleMenu}>
                {menuOpen ? "✖" : "☰"} {/* Show X for close, ☰ for open */}
            </button>
            {/* Links */}
            <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
                <li>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                </li>
                <li>
                    <Link to="/Cornelia" onClick={() => setMenuOpen(false)}>Cornelia</Link>
                </li>
                <li>
                    <Link to="/Lucas" onClick={() => setMenuOpen(false)}>Lucas</Link>
                </li>
                <li>
                    <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
