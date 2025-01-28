import React, { useState, useEffect } from "react";
import axios from "axios";

function Start() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/projects/") // Backend API URL
            .then((response) => {
                setProjects(response.data); // Set projects from the response
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
            });
    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Projects</h1>
            {projects.length > 0 ? (
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <a
                                href={project.git_link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub Link
                            </a>
                            <p>Authors: {project.authors}</p>
                            <p>Keywords: {project.keywords}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No projects available</p>
            )}
        </div>
    );
}

export default Start;
