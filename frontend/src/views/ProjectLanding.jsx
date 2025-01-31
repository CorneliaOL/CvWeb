import React, { useState, useEffect } from "react";
import axios from "axios";
import githubLogo from "../assets/github-logo.png";
import "./ProjectLanding.css";
import { motion } from "framer-motion";


function ProjectLanding() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/projects/")
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
            });
    }, []);

    return (
        <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.3 }}
        
    >
        <div className="landing-container">
            <header className="landing-header">
                <h1 className="landing-title">Projects</h1>
                <p className="landing-subtitle">Explore our software projects! Each day, the projects are fetched from github.</p>
            </header>

            <div className="landing-content">
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <h2 className="project-name">{project.name}</h2>
                            {project.description && (
                                <p className="project-description">{project.description}</p>
                            )}
                            {project.authors && (
                                <p className="project-authors">
                                    <strong>Authors:</strong> {project.authors}
                                </p>
                            )}
                            {project.git_link && (
                                <a
                                    href={project.git_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <img
                                        src={githubLogo}
                                        alt="GitHub Repository"
                                        className="github-logo"
                                    />
                                </a>
                            )}
                        </div>
                    ))
                ) : (
                    <p className="no-projects-message">No projects available</p>
                )}
            </div>
        </div>
        </motion.div>
    );
}

export default ProjectLanding;
