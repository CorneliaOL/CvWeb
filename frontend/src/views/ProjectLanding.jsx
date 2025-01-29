import React, { useState, useEffect } from "react";
import axios from "axios";
import githubLogo from "../assets/github-logo.png";
import { motion } from "framer-motion";


function ProjectLanding() {
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
        
        <div className="project-landing">
            <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
        >
            <div className="project-landing-overlay">
                <h1 className="project-landing-title">Projects</h1>
                {projects.length > 0 ? (
                    <div className="project-cards">
                        {projects.map((project) => (
                            <div className="card" key={project.id}>
                                {project.name && <h2 className="project-card-title">{project.name}</h2>}
                                {project.description && <p className="project-card-description">{project.description}</p>}
                                {project.authors && (
                                    <p className="project-card-authors">
                                        <strong>Authors:</strong> {project.authors}
                                    </p>
                                )}
                                {project.keywords && (
                                    <p className="project-card-keywords">
                                        <strong>Keywords:</strong> {project.keywords}
                                    </p>
                                )}
                                {project.git_link && (
                                    <a
                                        href={project.git_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-card-link"
                                    >
                                        <img
                                            src={githubLogo}
                                            alt="GitHub Repository"
                                            className="github-logo"
                                        />
                                    </a>
                            )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="project-landing-message">No projects available</p>
                )}
            </div>
            </motion.div>
        </div>
    );
}

export default ProjectLanding;
