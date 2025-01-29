import React from "react";
import { motion } from "framer-motion";
import TimelineComponent from "../components/TimelineComponent";
import { FaGraduationCap, FaBriefcase, FaProjectDiagram } from "react-icons/fa"; // Add the missing imports
import "./Cornelia.css";

const timelineData = [
    {
        date: "2020 - Present",
        title: "Software Engineering and Management",
        subtitle: "University of Gothenburg",
        description: "Pursuing a bachelor's degree in software engineering and management with a focus on AI and full-stack development.",
        icon: <FaGraduationCap />,
        iconColor: "#2b6bb0",
    },
    {
        date: "2023",
        title: "Student Employee",
        subtitle: "Chalmers University of Technology",
        description: "Collaborated with the marketing team to promote 'Lifelong Learning', organized fairs, and recruited student hosts.",
        icon: <FaBriefcase />,
        iconColor: "#ff69b4",
    },
    {
        date: "2022 - 2023",
        title: "Bachelor Thesis",
        subtitle: "AI-Powered Food Waste Reduction Tool",
        description:
            "Developing BambAI, a tool to help school restaurants analyze, predict, and reduce food waste using AI models.",
        icon: <FaProjectDiagram />,
        iconColor: "#90ee90",
        link: "https://example.com/bambai-project",
    },
    {
        date: "2021 - 2022",
        title: "Summer Worker",
        subtitle: "Volvo Group",
        description: "Developed MATLAB tools for integration with TargetLink and Artifactory, focusing on GUI improvements.",
        icon: <FaBriefcase />,
        iconColor: "#32cd32",
    },
    {
        date: "2020 - 2021",
        title: "Production Technician",
        subtitle: "Preem",
        description: "Monitored tanks, maintained process equipment, and ensured safe handling of specialty fuels.",
        icon: <FaBriefcase />,
        iconColor: "#ffb6c1",
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
