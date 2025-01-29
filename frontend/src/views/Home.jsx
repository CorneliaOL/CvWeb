import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TimelineComponent from "../components/TimelineComponent";
import { FaArrowDown } from "react-icons/fa";
import {
    FaGraduationCap,
    FaLaptopCode,
    FaRocket,
    FaUsers,
    FaCode,
    FaMicrochip,
    FaProjectDiagram,
    FaServer,
    FaBrain
} from "react-icons/fa";

function Home() {
    const [showTimeline, setShowTimeline] = useState(true);
    const homeRef = useRef(null);

    const timelineData = [
        {
            date: "2020 - 2021",
            title: "Met at Chalmers",
            description: "Lucas and Cornelia started studying Chemical Engineering and physics at Chalmers but decided to explore software development.",
            icon: <FaUsers />,
            iconColor: "#2b6bb0",
        },
        {
            date: "2022 - Term 1",
            title: "Introduction to Software Engineering",
            description: "Focused on programming fundamentals, object-oriented team programming, and software management methods.",
            icon: <FaCode />,
            iconColor: "#2b6bb0",
        },
        {
            date: "2022 - Term 2",
            title: "Technical Foundations",
            description: "Studied algorithms, data structures, database design, software design, and worked on an IoT project using Arduino and Wio Terminal.",
            icon: <FaMicrochip />,
            iconColor: "#2b6bb0",
        },
        {
            date: "2023 - Term 3",
            title: "Software Architecture & Web Development",
            description: "Learned about sustainable and maintainable software design, software architecture, and built full-stack applications.",
            icon: <FaProjectDiagram />,
            iconColor: "#2b6bb0",
        },
        {
            date: "2023 - Term 4",
            title: "Embedded & Real-Time Systems",
            description: "Studied embedded systems, real-time systems, DevOps, software quality, and testing using various test frameworks.",
            icon: <FaServer />,
            iconColor: "#2b6bb0",
        },
        {
            date: "2023 - Term 5",
            title: "Specialization & Electives",
            description: "Lucas focused on AI, data, and microservices, while Cornelia specialized in AI and recommender systems, completing a 15-credit AI project.",
            icon: <FaBrain />,
            iconColor: "#2b6bb0",
        },
        {
            date: "2024 - Term 6",
            title: "Research Methodology & Startups",
            description: "Final semester focusing on research methodology, software startups, and completing the bachelor thesis.",
            icon: <FaProjectDiagram />,
            iconColor: "#2b6bb0",
        },
        {
            date: "2024 - Term 6",
            title: "Bachelor’s Thesis",
            description: "We aim to address the significant issue of food waste, with a focus on its occurrence in homes and restaurants. Our goal is to explore how recent advances in AI, particularly foundation and language models, can create predictive models in data-sparse situations. By collaborating with school restaurants in Gothenburg, we plan to develop BambAI, a software solution to analyze, understand, predict, and help mitigate food waste. This project will not only aim to provide practical solutions but also explore the challenges of integrating AI into real-world software systems.",
            icon: <FaRocket />,
            iconColor: "#2b6bb0",
        },
    ];
    
    

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            const threshold = window.innerHeight * 0.5;

            if (scrollY > threshold) {
                setShowTimeline(true);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <motion.div
            ref={homeRef}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className="home-container"
        >
            <div className="home-box">
                <h1 className="home-title">Welcome to My Portfolio</h1>
                <p className="home-subtitle">
                    Lucas and Cornelia, the best of friends and soon one bachelor's degree richer. Here they will take you through their software engineering journey thus far and hope that you will be a part of their upcoming tech adventures.
                </p>
                <div className="home-links">
                    <Link to="/projects" className="home-link">Projects</Link>
                    <Link to="/cornelia" className="home-link">Cornelia's Page</Link>
                    <Link to="/lucas" className="home-link">Lucas's Page</Link>
                </div>
            </div>

            {/* Pulsing Down Arrow */}
            <p className="home-subtitle">Scroll to view our timeline</p>
            <motion.div 
                className="scroll-down-arrow"
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 1 }}
            >
                <FaArrowDown size={30} color="white" />
            </motion.div>

            {/* Spacer to allow scrolling */}
            <div className="spacer"></div>

            {/* Timeline Animation on Scroll */}
            <div className="timeline-wrapper">
                {showTimeline && <TimelineComponent timelineData={timelineData} className="timeline-home" />
            }
            </div>
        </motion.div>
    );
}

export default Home;
