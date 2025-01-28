import React, { useState, useEffect } from "react";
import axios from "axios";

function Hello() {
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
            <p>Hello world</p>
        </div>
    );
}

export default Hello;
