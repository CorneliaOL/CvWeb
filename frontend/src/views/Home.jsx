import React from "react";
import "../App.css"; // Ensure the styles are imported

function Home() {
    return (
        <div>
            <div className="home-box">
                <h1 className="home-title">Welcome to our Portfolio!</h1>
                <p className="home-subtitle">
                Lucas and Cornelia, the best of friends and soon one bachelors degree richer. Here they will take you through their software engineering journey thus far and hope that you will be a part of their upcoming tech adventures.                </p>
                <div className="home-links">
                    <a href="/projects" className="home-link">Projects</a>
                    <a href="/cornelia" className="home-link">Cornelia's Page</a>
                    <a href="/lucas" className="home-link">Lucas's Page</a>
                </div>
            </div>
        </div>
    );
}

export default Home;
