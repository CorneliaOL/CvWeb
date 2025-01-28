import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <h1>Project Showcase</h1>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </header>
    );
}

export default Header;
