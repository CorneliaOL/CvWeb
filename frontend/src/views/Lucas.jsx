import React from "react";
import { motion } from "framer-motion";
import TimelineComponent from "../components/TimelineComponent";
import { FaGraduationCap, FaBriefcase, FaProjectDiagram } from "react-icons/fa"; // Add the missing imports
import "./Cornelia.css";

const timelineData = [
    {
        date: "August 2018",
        title: "McDonalds",
        subtitle: "Trollhättan",
        description: "I started my first long term employment at McDonalds.",
        icon: <FaGraduationCap />,
        iconColor: "#2b6bb0",
    },
    {
        date: "June 2019",
        title: "Gymnasie Graduation",
        subtitle: "Nils Ericsonsgymnasiet",
        description: "I graduated from Nils Ericsonsgymnasiet in 2019. My \"gymnasiearbete\" was about prototyping a study room booking system for the school.",
        icon: <FaGraduationCap />,
        iconColor: "#2b6bb0",
    },
    {
        date: "2019-2021",
        title: "Studies",
        subtitle: "Chalmers University of Technology",
        description: "I started my achademical career at Chalmers, studying chemical engineering and engineering physics.",
        icon: <FaBriefcase />,
        iconColor: "#ff69b4",
    },
    {
        date: "2022",
        title: "Achademic shift",
        subtitle: "Software Engineering and Managment",
        description:
            "I realized my passion was not in the field of chemical engineering, but rather computer systems and started studying Software Engineering and Managment at Gothenburg University.",
        icon: <FaProjectDiagram />,
        iconColor: "#90ee90",
        link: "https://example.com/bambai-project",
    },
    {
        date: "Spring 2023",
        title: "BloomBuddy",
        subtitle: "Group Project",
        description:
            "This was an IoT project where we made a plant monitor with a Wio terminal. The client that displayed data and allowed you to change settings was made with Java and JavaFX. MQTT was used for communications between the two.",
        icon: <FaProjectDiagram />,
        iconColor: "#90ee90",
        link: "https://example.com/bambai-project",
    },
    {
        date: "Fall 2023",
        title: "Foodist",
        subtitle: "Group Project",
        description:
            "This was a website that would keep track of your food items, and recommend food items to buy based on recipes",
        icon: <FaProjectDiagram />,
        iconColor: "#90ee90",
        link: "https://example.com/bambai-project",
    },
    {
        date: "Winter 2023",
        title: "Dentanoid",
        subtitle: "Group Project",
        description:
            "Distributed microservice system made to facillitate easier dentist appointment booking.",
        icon: <FaProjectDiagram />,
        iconColor: "#90ee90",
        link: "https://example.com/bambai-project",
    },
    {
        date: "2024",
        title: "Teaching Assistant",
        subtitle: "Fundamentals of Software Architecture",
        description: "I worked as a teching assistant for the course Fundamentals of Software Architecture. My tasks included grading assignments and having weekly meetings with groups of students.",
        icon: <FaBriefcase />,
        iconColor: "#32cd32",
    },
];

const Cornelia = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            
        >
            <div className="lucas-container">
            {/* Header Section */}
            <div className="lucas-header">
                <h1 className="lucas-title">Lucas</h1>
                <p className="lucas-subtitle">
                    Software Engineering and Management student with a passion for AI,
                    frontend development, and creating impactful software solutions.
                </p>
            </div>
            
            </div>
            {/* Timeline Section */}
            <div className="lucas-section">
                <h2>My timeline</h2>
                <TimelineComponent timelineData={timelineData} className="timeline-lucas" />

            </div>
        </motion.div>
    );
};

export default Cornelia;
