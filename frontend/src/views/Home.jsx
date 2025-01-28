import React from "react";
import "../App.css"; // Ensure the styles are imported

function Home() {
    return (
        <div>
            <div className="home-box">
                <h1 className="home-title">Welcome to My Portfolio</h1>
                <p className="home-subtitle">
                    Explore projects and meet the contributors!
                </p>
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
