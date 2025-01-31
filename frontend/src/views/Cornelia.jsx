import React from "react";
import { motion } from "framer-motion";
import TimelineComponent from "../components/TimelineComponent";
import { useEffect } from "react";

import githubLogo from "../assets/github-logo.png";

import { FaGraduationCap, FaBriefcase, FaProjectDiagram } from "react-icons/fa";
import "./Cornelia.css";

import linkedInLogo from "../assets/linkedIn.png";

const timelineData = [
    {
        date: "2015-2019",
        title: "Youth leader at a riding school",
        subtitle: "Tunalids ridskola",
        description: "I was put on a horse by my mom at the age of six, and was stuck after. I worked as a youth leader with teaching children and teenagers how to groom, care and ride horses. The work also included working with the day to day care of the stables and pastures.",
        icon: <FaBriefcase />,  // Work experience
        iconColor: "#ff69b4",
    },
    {
        date: "2018",
        title: "APL at a marine biology research group",
        subtitle: "Iceland, Husavík",
        description: "Through a program at my highschool, I got to follow a marine biology resarch group. We photographed humpback whales, and put them in a catalogue. I got to name one whale, and I named it to 'Per-åke'!",
        icon: <FaGraduationCap />,  // Education-related
        iconColor: "#2b6bb0",
    },
    {
        date: "2016-2019",
        title: "Graduated High School",
        subtitle: "Bromangymnasiet",
        description: "I graduated from the 'Naturvetenskapsprogrammet Natur', and did my 'Gymnasiearbete' researching how rising levels of water would affect Hudiksvall",
        icon: <FaGraduationCap />,  // Education
        iconColor: "#2b6bb0",
    },
    {
        date: "2019",
        title: "Max hamburgers",
        subtitle: "Summer work and extra work during high school",
        description: "Worked with customer service, mainly in the drive through. I worked full time during the summer, and on weekends during highschool",
        icon: <FaBriefcase />,  // Work experience
        iconColor: "#ff69b4",
    },
    {
        date: "2019-2021",
        title: "Chemical engineering",
        subtitle: "Chalmers University of Technology",
        description: "I studied Chemical engineering after high school, which was super fun! But I enjoyed the chemistry more than chemical engineering, and wanted to change track...",
        icon: <FaGraduationCap />,  // Education
        iconColor: "#2b6bb0",
    },
    {
        date: "2021-2023",
        title: "Student Employee",
        subtitle: "Chalmers University of Technology",
        description: "Collaborated with the marketing team to promote 'Lifelong Learning', organized fairs, and recruited student hosts.",
        icon: <FaBriefcase />,  // Work experience
        iconColor: "#ff69b4",
    },
    {
        date: "Summer '22 & 23'",
        title: "Summer worker",
        subtitle: "Preem refinery",
        description: "I was part of a team that staffs the production facilities, taking care of equipment and perform sampling in an assigned area. Primarily worked with maintenance, operation and monitoring of process equipment.",
        icon: <FaBriefcase />,  // Work experience
        iconColor: "#ff69b4",
    },
    {
        date: "2022 - 2025",
        title: "Study Software Engineering and Management",
        subtitle: "University of Gothenburg",
        description:
            "After a frustrating meeting with a platform provider when I was a student employee at Chalmers, I thought to myself that \"I can do it betten myself\". So naturally, I decided to start studying software engineering. :)",
        icon: <FaGraduationCap />,  // Education
        iconColor: "#2b6bb0",
        link: "https://example.com/bambai-project",
    },
    {
        date: "Summer '24",
        title: "Summer Intern",
        subtitle: "Volvo Group GTT",
        description:
            "Worked in pair with another summer worker and developed MATLAB tools to integrate with TargetLink and Artifactory, addressing tasks from the developer backlog. Extended an object-oriented MATLAB simulation tool, designing a dynamic plot template generator integrated into the main GUI which we also built.",
        icon: <FaProjectDiagram />,  // Project / Internship
        iconColor: "#90ee90",
        link: "https://example.com/bambai-project",
    },
    {
        date: "Winter '23",
        title: "AI project",
        subtitle: "15hp project in school",
        description:
            "Developed a restaurant recommender system as a web site. Deployed on kubernetes with frontend, backend and ML model as a separate service.",
        icon: <FaProjectDiagram />,  // Project / Internship
        iconColor: "#90ee90",
        link: "https://example.com/bambai-project",
    },
    {
        date: "2022 - 2025",
        title: "Bachelor Thesis",
        subtitle: "AI-Powered Food Waste Reduction Tool",
        description:
            "Developing BambAI, a tool to help school restaurants analyze, predict, and reduce food waste using AI models.",
        icon: <FaProjectDiagram />,  // Project / Research
        iconColor: "#90ee90",
        link: "https://example.com/bambai-project",
    }
];

const Cornelia = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        console.log("scroll")
      }, []);
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
        >
            <div className="cornelia-container">
                {/* Header Section */}
                <div className="cornelia-header">
                    <h1 className="cornelia-title">Cornelia Olofsson</h1>
                    <p className="cornelia-subtitle">
                        Software Engineering and Management student with a passion for developing robust systems, cooking food and spending time with friends - the perfect mix! Look at my timeline below, to see what I've been up to. You can see more projects at the "Projects" page! Add me on linked in by pressing the logo below! :)
                    </p>

                    {/* Social Links Section */}
                    <div className="cornelia-social-links">
                        <a
                            href="https://www.linkedin.com/in/cornelia-olofsson/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin-logo"
                        >
                            <img
                                src={linkedInLogo}
                                alt="LinkedIn link"
                                className="social-logo"
                            />
                        </a>

                        <a
                            href="https://github.com/CorneliaOL?tab=overview&from=2025-01-01&to=2025-01-31"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-logo"
                        >
                            <img
                                src={githubLogo}
                                alt="GitHub Repository"
                                className="social-logo"
                            />
                        </a>
                    </div>
                </div>
            </div>
            {/* Timeline Section */}
            <div className="cornelia-section">
                <h2>My timeline</h2>
                <TimelineComponent timelineData={timelineData} className="timeline-cornelia" />
            </div>
        </motion.div>
    );
};

export default Cornelia;
